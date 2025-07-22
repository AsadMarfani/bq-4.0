module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log("Validation Error:", error.details);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};
