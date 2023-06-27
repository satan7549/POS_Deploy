const cookieToken = async (user, res) => {
  const token = await user.getToken();
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  };
  user.password = undefined;
  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(200).cookie("token", token, options).json({
    message: "success",
    token,
    user,
  });
};

module.exports = cookieToken;
