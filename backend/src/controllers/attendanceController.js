const Attendance = require("../models/Attendance");

exports.checkIn = async (req, res) => {
  try {
    const { userId } = req.body;

    const existToday = await Attendance.findOne({
      userId,
      checkIn: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) }
    });

    if (existToday) return res.json({ message: "Already checked in today" });

    const record = await Attendance.create({
      userId,
      checkIn: new Date()
    });

    res.json({ message: "Check-in successful", record });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.checkOut = async (req, res) => {
  try {
    const { userId } = req.body;

    const record = await Attendance.findOne({
      userId,
      checkOut: null
    });

    if (!record) return res.json({ message: "You must check-in first" });

    record.checkOut = new Date();
    await record.save();

    res.json({ message: "Check-out successful", record });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
