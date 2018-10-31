' Date and time examples in Visual Basic Script (Vbscript)

' Return date and time in format: dd.mm.yyyy hh:mm:ss AM/AM
Wscript.Echo FormatDateTime(now,0)
' Return date in format: weekdayname, dd. monthname year
Wscript.Echo FormatDateTime(now,1)
' Return date in format: dd.mm.yyyy
Wscript.Echo FormatDateTime(now,2)
' Return time in format: hh:mm:ss PM/AM
Wscript.Echo FormatDateTime(now,3)
' Return time in format: hh:mm
Wscript.Echo FormatDateTime(now,4)
