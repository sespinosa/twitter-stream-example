import chalk from 'chalk'

const streamError = (err) => {
	console.log(chalk.red(err))
}

export default streamError