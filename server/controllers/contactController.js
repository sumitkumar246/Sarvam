import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required"
      });
    }

    const contact = await Contact.create({
      name,
      phone,
      email,
      message
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};