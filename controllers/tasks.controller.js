const { Tasks } = require('../models/task.models')

const getAllTasks = async (req, res) => {
	try {
		const allTask = Tasks.find({})

		return res.status(200).json({
			meassage: 'task fetched Sucessfully',
			allTask,
		})
	} catch (err) {
		console.log(err)
		return res.status(500).json({
			message: 'Unable to create task',
		})
	}
}

const createTasks = async (req, res) => {
	try {
		const task = await Tasks.create(req.body)
		return res.status(201).json({
			meassage: 'task Created Sucessfully',
			task,
		})
	} catch (err) {
		console.log(err)
		return res.status(500).json({
			message: 'Unable to create task',
		})
	}
}

const getTasks = async (req, res) => {
	try {
		const taskId = req.params.id
		const getSingleTask = Tasks.findOne({ _id: taskId })

		if (!getSingleTask) {
			return res.status(401).json({
				message: 'Unable to get id',
			})
		}

		return res.status(200).json({
			meassage: 'task fetched Sucessfully',
			getSingleTask,
		})
	} catch (err) {
		console.log(err)
		return res.status(500).json({
			message: 'Unable to create task',
		})
	}
}

const updateTasks = async (req, res) => {
	try {
		const taskId = req.params.id
		const { body: taskBody } = req.body
		// const update ={body:taskBody.name}
		const updateSingleTask = await Tasks.findOneAndUpdate({ _id: taskId }, taskBody, {
			new: true,
			runValidators: true,
		})

		if (!updateSingleTask) {
			return res.status(401).json({
				message: 'Unable to get id',
			})
		}

		return res.status(200).json({
			meassage: 'task Deleted Sucessfully',
			updateSingleTask,
		})
	} catch (err) {
		console.log(err)
		return res.status(500).json({
			message: 'Unable to create task',
		})
	}
}

const deleteTasks = async (req, res) => {
	try {
		const taskId = req.params.id
		const deleteSingleTask = Tasks.findOneAndDelete({ _id: taskId })

		if (!deleteSingleTask) {
			return res.status(401).json({
				message: 'Unable to get id',
			})
		}

		return res.status(200).json({
			meassage: 'task Deleted Sucessfully',
			deleteSingleTask,
		})
	} catch (err) {
		console.log(err)
		return res.status(500).json({
			message: 'Unable to create task',
		})
	}
}

module.exports = {
	getAllTasks,
	createTasks,
	getTasks,
	updateTasks,
	deleteTasks,
}
