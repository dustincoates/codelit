# https://www.poets.org/poetsorg/poem/just-say

def this_is_just_to_say
  puts <<-END.gsub(/^\s+/,'')
    I have eaten
    the plums
    that were in
    the icebox
  END
end
