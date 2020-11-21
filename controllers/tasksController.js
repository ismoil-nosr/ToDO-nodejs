const TaskModel = require(__dirname + '/../models/task.js');
const date = require(__dirname + '/../date.js');

let TaskController = {
    index: async (req, res) => {
        TaskModel.find({}).lean().exec(function (err, foundTasks) {
            if (err) {
                console.log(err);
            }

            res.render('main', {
                curDate: date.getDate, 
                title: 'TodoTasks', 
                items: foundTasks,
                system_message: req.flash('system_message')
            });
        });
    },
    store: async (req, res) => {
        let task = TaskModel({
            content: req.body.content,
        });

        task.save()
        .then(function () {
            res.redirect('/');
        })
        .catch(function (err) {
            let message = err.errors.content.message;
            
            if (err) {
                req.flash('system_message', message);
            }

            res.redirect('/');
        });
    },
    destroy: async (req, res) => {
        let task_id = req.params.task_id;
        if (task_id !== 'favicon.ico') {
            TaskModel.findByIdAndDelete(task_id, function (err, result) {
                if (err) {
                    console.log(err);
                }
            });
        }

        res.redirect('/');
    }
};

module.exports = TaskController;