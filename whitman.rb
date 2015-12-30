# http://www.english.illinois.edu/maps/poets/s_z/whitman/song.htm

class Whitman
  include Gneiss, Coal, LongThreadedMoss, Fruit,
    Grains, EsculentRoot, Quadrupeds, Birds

  extend Old, Young, Foolish, Wise, Regardless, Regardful,
    Maternal, Paternal, Child, Man, Stuff::Coarse, Stuff::Fine

  def is_a? klass
    return [
      Southerner, Northerner, Yankee, Kentuckian, Louisianan, Georgian, Boatman,
      Hoosier, Badger, Buckeye, LearnerWithTheSimplest,
      TeacherOfTheThoughtfullest, Novice, Farmer, Mechanic, Artist, Gentleman,
      Sailor, Quaker, Prisoner, FancyMan, Rowdy, Layer, Physician, Priest
    ].include? klass
  end

  def == comparison
    !(self.equal? comparison)
  end
end
