const getAllTasks = async (req, res) => {
    res.send('Get All Task')
};


const createTasks = async (req, res) => {
    res.send('ACreate task')
};

const getTasks = async (req, res) => {
    res.send('Gget single task')
};
const updateTasks = async (req, res) => {
    res.send('update task')
};
const deleteTasks = async (req, res) => {
    res.send('delete task')
};

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}
