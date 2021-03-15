'use strict'

const { Branch } = require('../models')

class BranchController {
    static async createBranch (req, res, next) {
        const {
            name,
            latitude,
            longitude,
            opening_hours
        } = req.body

        try {
            const newBranch = await Branch.create({ name, latitude, longitude, opening_hours })

            res.status(201).json({
                code: 201,
                newBranch
            })
        } catch (err) {
            next(err)
        }
    }

    static async getBranchs (req, res, next) {
        try {
            const branchs = await Branch.findAll()

            res.status(200).json({
                code: 200,
                branchs
            })
        } catch (err) {
            next(err)
        }
    }

    static async getBranch (req, res, next) {
        const { id } = req.params;

        try {
            const branch = await Branch.findByPk(id)
            
            if(branch) {
                res.status(200).json({
                    code: 200,
                    branch
                })
            } else {
                next({code: 404, msg: 'Branch not found'})
            }

            res.status(200).json({
                code: 200,
                branchs
            })
        } catch (err) {
            next(err)
        }
    }

    static async deleteBranch (req, res, next) {
        const { id } = req.params;

        try {
            const findBranch = await Branch.findByPk(id)
            if(findBranch) {
                let name = findBranch.name
                await Branch.destroy({ where: { id } })

                res.status(200).json({
                    code: 200,
                    msg: `${name} was successfully deleted`
                })
            } else {
                next({code: 404, msg: 'Branch not found'})
            }
        } catch (err) {
            next(err)
        }
    }

    static async updateBranch (req, res, next) {
        const { id } = req.params;
        const value = req.body

        try {
            await Branch.update(value, {where: {id}})
            const branch = await Branch.findByPk(id)

            res.status(200).json({
                code: 200,
                branch
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = BranchController