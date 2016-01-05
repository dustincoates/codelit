'use strict';

class Footnote {
  constructor(corpus) {
    this.corpus = corpus;
  }

  * follow() {
    let index = 0;
    while(true) {
      let note = this.corpus[index] || 'Q.v. Note ' + Math.floor(Math.random() * 1000) + ' supra.';
      yield `${note} ${[index++]}`;
    }
  }
}

let text = new Footnote([
  '\'Une Personne de l\'Importance Terrible,\' presumably.',
  'This is the neurological term for special pain receptors that are (according to Jane A. Smith and Kenneth M. Boyd’s Lives in the Balance) “sensitive to potentially damaging extremes of temperature, to mechanical forces, and to chemical substances which are released when body tissues are damaged.”'
  'With the possible exception of Cage III — Free Show, Incandenza\'s Cage series bears no discernible relation to Sidney Peterson\'s 1947 classic, The Cage.',
  'In this last respect, recall for example W. J. Clinton\'s famous "I feel your pain," which was a blatant if not particularly masterful Ethical Appeal.',
  'This is a clever half-truth. Linguists compose only one part of the anti-judgement camp, and their objections to usage judgments involve way more than just "subjectivity."',
  '(which in fact is true)',
  '(and then some)',
  '(though never unveiled)',
  'I was never in countless tries able to determine just what the Engler Corporation did or made or was about, but they\'d apparently sent a quorum of their execs on this 7NC junket together as a weird kind of working vacation or intracompany convention or something.',
  'People outside the Boston AA community always use The and say The Ennet House; this is one way to tell somebody new or from outside the community.',
  'In truth, there’s a great deal to be said about the differences between working-class Rockland and the heavily populist flavor of its Festival versus comfortable and elitist Camden with its expensive view and shops given entirely over to $200 sweaters and great rows of Victorian homes converted to upscale B&Bs. And about these differences as two sides of the great coin that is U.S. tourism. Very little of which will be said here, except to amplify the above-mentioned paradox and to reveal your assigned correspondent’s own preferences. I confess that I have never understood why so many people’s idea of a fun vacation is to don flip-flops and sunglasses and crawl through maddening traffic to loud hot crowded tourist venues in order to sample a “local flavor” that is by definition ruined by the presence of tourists. This may (as my Festival companions keep pointing out) all be a matter of personality and hardwired taste: The fact that I just do not like tourist venues means that I’ll never understand their appeal and so am probably not the one to talk about it (the supposed appeal). But, since this note will almost surely not survive magazine-editing anyway, here goes:\nAs I see it, it probably really is good for the soul to be a tourist, even if it’s only once in a while. Not good for the soul in a refreshing or enlivening way, though, but rather in a grim, steely-eyed, let’s-look-honestly-at-the-facts-and-find-some-way-to-deal-with-them way. My personal experience has not been that traveling around the country is broadening or relaxing, or that radical changes in place and context have a salutary effect, but rather that intranational tourism is radically constricting, and humbling in the hardest way—hostile to my fantasy of being a real individual, of living somehow outside and above it all. (Coming up is the part that my companions find especially unhappy and repellent, a sure way to spoil the fun of vacation travel:) To be a mass tourist, for me, is to become a pure late-date American: alien, ignorant, greedy for something you cannot ever have, disappointed in a way you can never admit. It is to spoil, by way of sheer ontology, the very unspoiledness you are there to experience. It is to impose yourself on places that in all noneconomic ways would be better, realer, without you. It is, in lines and gridlock and transaction after transaction, to confront a dimension of yourself that is as inescapable as it is painful: As a tourist, you become economically significant but existentially loathsome, an insect on a dead thing.',
  'See?'
]);
let footnotes = text.follow();

while(footnotes.done !== false) {
  footnotes.next().value;
}
