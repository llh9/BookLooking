const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        thisUser: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
              return userData;
            }
            throw new AuthenticationError('Not logged in');
          }
    },

    Mutation: {
        findUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('no user found');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError(' user not found');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
};
module.exports = resolvers;