const excludePassword = (user) => {
    //change it to js object not mongoose document hich includes the document's data along with various Mongoose-specific properties and methods.
    //
    user = user.toObject()
    if (!user) {
        throw new Error('User not found');
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

export {excludePassword}