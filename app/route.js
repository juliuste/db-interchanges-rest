'use strict'

const getInterchange = require('db-interchanges')
const ow = require('ow')

const stationInput = ow.object.exactShape({
	stationId: ow.string,
	platform: ow.string
})
const optInput = ow.object.exactShape({
	fastaToken: ow.string
})

const route = async (req, res, next) => {
	try {
		const from = { stationId: req.query.fromStationId, platform: req.query.fromPlatform }
		const to = { stationId: req.query.toStationId, platform: req.query.toPlatform }
		const opt = req.query.fastaToken ? { fastaToken: req.query.fastaToken } : null
		ow(from, stationInput)
		ow(to, stationInput)
		if (opt) ow(opt, optInput)

		const interchange = await getInterchange(from, to, opt)

		res.status(200)
		res.json(interchange)
	} catch (error) {
		res.status(400) // @todo
		return res.json({ error: error.message })
	}
}

module.exports = route
