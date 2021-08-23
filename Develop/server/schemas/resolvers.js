const { User, Book } = require('../models')

const resolvers = {
    Query: {
        me: async => {
        if (context.user) {
            return User.findOne({ _id: context.user._id}).populate('books')
        }
        throw new AuthenticationError('You need to be logged in!');
        }
    }
}