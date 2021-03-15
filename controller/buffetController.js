'use strict'

const { Buffet } = require('../models')

class BuffetController {
    static async createBuffet (req, res, next) {
        const {
            name,
            latitude,
            longitude,
            opening_hours
        } = req.body

        try {
            const newBuffet = await Buffet.create({ name, latitude, longitude, opening_hours })
            res.status(201).json({
                code: 201,
                newBuffet
            })
        } catch (err) {
            next(err)
        }
    }

    static async getBuffets (req, res, next) {
        try {
            const buffets = await Buffet.findAll()
            res.status(200).json({
                code: 200,
                buffets
            })
        } catch (err) {
            next(err)
        }
    }

    static async getBuffet (req, res, next) {
        const { id } = req.params;

        try {
            const buffet = await Buffet.findByPk(id)

            if(buffet) {
                res.status(200).json({
                    code: 200,
                    buffet
                })
            } else {
                next({code: 404, msg: 'Buffet not found'})
            }

            res.status(200).json({
                code: 200,
                branchs
            })
        } catch (err) {
            next(err)
        }
    }

    static async deleteBuffet (req, res, next) {
        const { id } = req.params;

        try {
            const findBuffet = await Buffet.findByPk(id)
            if(findBuffet) {
                let name = findBuffet.name
                await Buffet.destroy({ where: { id } })

                res.status(200).json({
                    code: 200,
                    msg: `${name} was successfully deleted`
                })
            } else {
                next({code: 404, msg: 'Buffet not found'})
            }
        } catch (err) {
            next(err)
        }
    }

    static async updateBuffet (req, res, next) {
        const { id } = req.params;
        const value = req.body

        try {
            await Buffet.update(value, {where: {id}})
            const buffet = await Buffet.findByPk(id)
            
            res.status(200).json({
                code: 200,
                buffet
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = BuffetController