const { validateRole, validateUpdate } = require("./role.validator");
const RoleModel = require("./index");

//insert new Role
exports.roleInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateRole(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const roleExists = await RoleModel.findOne({
      role_name: value.role_name,
    });

    if (roleExists) {
      // Send Response
      return res.status(409).json({ message: "Role already exists!" });
    }

    // Insert role
    const role = new RoleModel(value);
    const savedData = await role.save();

    // Send Response
    res.status(200).json({ message: "success", role: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into the database");
  }
};

// Display Single Role
exports.showRole = async (req, res, next) => {
  try {
    const id = req.params.id;
    const role = await RoleModel.findOne({ _id: id });

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.status(200).json({ message: "success", role });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showRoles = async (req, res, next) => {
  try {
    const role = await RoleModel.find({ del_status: "Live" });

    if (!role || role.length === 0) {
      return res.status(404).json({ message: "role not found" });
    }

    res.status(200).json({ message: "success", role });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update role
exports.updateRole = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const role = await RoleModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!role) {
      console.log("Role not found");
      return res.status(404).json({ message: "Role not found" });
    }

    res.status(200).json({ role });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json("Error updating role");
  }
};

//   // Delete role
exports.deleteRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedRole = await RoleModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedRole) {
      return res.status(404).json({ message: "Role not found." });
    }
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
