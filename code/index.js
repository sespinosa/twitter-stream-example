import Twitter from 'twitter'
import streamUtils from './stream'
import env from './env'


const client = new Twitter(env.twitterParams)

client.stream('statuses/filter', streamUtils.streamParams(), (stream) => {
	stream.on('data', streamUtils.streamFilter)
	stream.on('error', streamUtils.streamError)
})