// import { FastifyRequest } from 'fastify'
// import User from '../models/user.model'
// import { fAdmin } from '../utils/firebaseAdmin'

// export const authContext = async (req: FastifyRequest) => {
//   if (!req.headers?.authorization) return {}

//   const authUser = await fAdmin.auth().verifyIdToken(req.headers.authorization.split(' ')[1])

//   if (!authUser) return {}

//   const user = await User.findOne({ where: { publicId: authUser.sub } })
//   return { authUser, user }
// }
