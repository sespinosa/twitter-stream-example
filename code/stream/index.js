import ids from './ids'
import streamFilter from './filter'
import streamError from './error'

const streamParams = () => {
	return {
		follow: ids.getIds()
	}
}

export default {
	ids,
	streamFilter,
	streamError,
	streamParams
}