datalogger.deleteLog(datalogger.DeleteType.Full)
loops.everyInterval(3000, function () {
    datalogger.log(
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("light", input.lightLevel())
    )
})
