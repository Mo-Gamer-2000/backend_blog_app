import PostCategories from "../models/PostCategories";

const createPostCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    const postCategory = await PostCategories.findOne({ title });

    if (post) {
      const error = new Error("Category is already created!");
      return next(error);
    }

    const newPostCategory = new PostCategories({
      title,
    });

    const savedPostCategory = await newPostCategory.save();

    return res.status(201).json(savedPostCategory);
  } catch (error) {
    next(error);
  }
};

export { createPostCategory };
