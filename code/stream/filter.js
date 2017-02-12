import chalk from 'chalk'

const streamFilter = (tweet) => {
	console.log(chalk.green(`${tweet.user.screen_name} : ${tweet.text}`))
}

export default streamFilter