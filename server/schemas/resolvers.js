const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async => {
        if (context.user) {
            return User.findOne({ _id: context.user._id}).populate('books')
        }
        throw new AuthenticationError('You need to be logged in!');
        },
},
Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      addBook: async (parent, { newBook }, conotext) => {
          if(context.user) {
            const saveBook = await User.findByIdAndUpdate(
              { _id: context.uesr._id },
              { $push: { savedBooks: newBook } },
              { new: true }
            ); return saveBook
          }
          throw new AuthenticationError("You have to be logged in!");
      },

      deleteBook: async (parent, { bookId }, context) => {
          if(context.user) {
              const removeBook = await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $pull: { savedBooks: { bookId: bookId }} },
                  { new: true }
              ); return removeBook
          }
          throw new AuthenticationError("You have to be logged in!");
        },
    
      },
};

module.exports = resolvers;