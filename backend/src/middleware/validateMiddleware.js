const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        // message: "Validation failed", 
        // ??????? why not used here in?? reference froom To-Task project in validateMiddleware.js ????
        success: false,
        errors: result.error.issues,
      });
    }

    req.validatedBody = result.data;
    next();
  };
}

export default validate;
