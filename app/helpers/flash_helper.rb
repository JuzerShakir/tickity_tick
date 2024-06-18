module FlashHelper
  def css_class_for_flash(type)
    case type
    when "notice"
      "bg-green-50 text-green-500"
    when "alert"
      "bg-amber-50 text-amber-500"
    end
  end

  def icon_for_flash(type)
    case type
    when "notice"
      "m4.5 12.75 6 6 9-13.5"
    when "alert"
      "M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    end
  end

  def delay_flash(message)
    (message.length.fdiv(10).ceil * 1000).to_s
  end
end