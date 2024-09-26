const excludePassword = (user) => {
    if (!user) {
        throw new Error('User not found');
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

export {excludePassword}