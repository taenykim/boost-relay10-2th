const { KMR } = require('koalanlp/API');
const { initialize } = require('koalanlp/Util');
const { Tagger } = require('koalanlp/proc');

async function nlp(input) {
  await initialize({ packages: { KMR: '2.0.4' }, verbose: true });

  let tagger = new Tagger(KMR, { kmrLight: true });

  let tagged = await tagger.tagSync(input);
  let keyword;
  for (const sent of tagged) {
    keyword += sent.singleLineString();
  }
  let result = nlpParser(keyword).toString();
  console.log("inside NLP", result)
  return result;
}

const nlpParser = (str) => {
  const resultSet = new Set();
  str.split(" ").forEach(index => {
    if (index.includes("NNG") || index.includes("NNP")) {
      let noum = index.substring(0, index.indexOf("/"));
      if (noum.length >= 2) {
        resultSet.add(noum);
      }
    }
  })
  return Array.from(resultSet);
}

let input = "한 커플이 있었는데 남자가 디자이너에요. 둘은 결혼을 하기로했고 여자는 남자에게 자신의 웨딩드레스 디자인을 맡겼습니다.\n\
    남자는 장난으로 난도질한 드레스를 주었고 여자는 한번만 더 장난치면 정말 헤어질 거라고 말했죠. \n\
    여자는 자신의 웨딩드레스 디자인을 맡기면서 미니스커트는 싫으니 롱드레스로 만들어달라고 말했어요. \n\
    결혼식 전날, 남자는 드레스를 다 만들어 여자친구의 집 앞에 갔고 드레스를 본 여자는 남자에게 화를 내며 집으로 들어가버렸습니다. \n\
    드레스가 미니스커트였기 때문이죠. 남자가 아무리 이름을 부르고 문을 두드려도 여자는 쳐다보지도않았습니다. \n\
    몇년 후, 다른 남자와 결혼한 여자는 자신의 딸이 학예회 때 입을 치마를 골라주고 있었습니다. \n\
    옷장을 뒤지다가 옛 남친이 만들어준 그 미니스커트가 딸에게 맞을 것 같아 그 치마를 꺼내서 딸에게 입혔고 딸이 너무 예쁘다며 빙글빙글 도는 모습을 보며 여자는 조용히 눈물을 흘렸습니다."

nlp(input).then(result => console.log("***", result));

module.exports = nlp;