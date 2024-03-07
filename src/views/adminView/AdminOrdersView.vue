<template>
  <div class="table-responsive-lg">
    <table class="table text-center align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="min-width: 250px">訂單編號</th>
          <th scope="col" style="min-width: 100px">訂購人</th>
          <th scope="col" style="min-width: 100px">訂單金額</th>
          <th scope="col" style="min-width: 100px">是否付款</th>
          <th scope="col" style="min-width: 200px">訂購日期</th>
          <th scope="col" style="min-width: 150px">訂單資訊</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item">
          <th scope="row">{{ item.num }}</th>
          <td>{{ item.id }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.is_paid ? '是' : '否' }}</td>
          <td>{{ timeFormat(item.create_at) }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openEditModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDeleteModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="text-end mt-auto d-flex align-items-center">
    <!-- pagination -->
    <PaginationComponent :pagination="pagination" @current-page="readProducts" />
  </div>
  <!-- Modal -->
  <div
    id="editOrderModal"
    ref="editOrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="editOrderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="editOrderModalLabel" class="modal-title">
            <span>編輯訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deletePrdouct">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';

const data = {
  success: true,
  orders: [
    {
      create_at: 1708672585,
      id: '-NrJocuc4OZbUY6ECgTe',
      is_paid: false,
      products: {
        '-NrJocw-Kkz6aZ-3vOJK': {
          final_total: 444,
          id: '-NrJocw-Kkz6aZ-3vOJK',
          product: {
            category: '電影',
            content:
              '《蒼鷺與少年》（日語：君たちはどう生きるか，英語：The Boy and the Heron）是一部2023年上映的日本動畫電影，由宮崎駿執導兼編劇，吉卜力工作室製作。電影原文片名是引用自小說家吉野源三郎在1937年發表的著書《你想活出怎樣的人生》，內容則為宮崎駿原創。劇情講述少年牧眞人在母親因火災喪生後與一隻會說話的蒼鷺相遇，展開不可思議的探索旅程。\n\n宮崎駿過去曾於2013年發表《風起》後宣布引退，在經歷一段時間後，打算繼續製作動畫電影而復出，此部作品是他間隔《風起》10年後再度推出的作品。\n\n廣告手法上，《蒼鷺與少年》是吉卜力工作室少數不進行宣傳，未釋出預告片和劇照，便直接在院線上映的動畫電影。上映後在日本國內獲得的評價普遍兩極，動畫視覺效果、製作、音樂、美術為評論家稱讚的焦點，但同時也有部份評論認為故事偏向艱澀不易理解、配音演出難以讓人融入情境。票房方面在日本上映首日便突破4億日圓，影片賣座的同時也間接帶動吉野源三郎著書的銷售量和再版。\n\n此部影片在日本海外的東亞、北美、歐洲等地上映時同樣獲得許多迴響，在全球票房有突破1億美元的成績，並得到包括第81屆金球獎在內許多國際影評協會頒贈的最佳動畫片獎項肯定。也在第51屆安妮獎與新海誠執導的《鈴芽之旅》並列7項獎項提名，成為日本動畫電影歷年入圍安妮獎獎項數目之最。',
            description:
              '導演\t宮崎駿\n監製\t鈴木敏夫\n編劇\t宮崎駿\n故事\t宮崎駿\n原著\t你想活出怎樣的人生\n主演\t\n山時聰真\n菅田將暉\n柴咲幸\n愛繆\n木村佳乃\n木村拓哉\n配樂\t久石讓\n片尾曲\t《地球儀》\n攝影\t奧井敦\n剪輯\t瀬山武司\n製片商\t吉卜力工作室\n片長\t124分鐘\n產地\t日本\n語言\t日語',
            id: '-NpJcz_4YQX2Fu6P4dAE',
            imageUrl: 'https://www.ghibli.jp/images/kimitachi.jpg',
            imagesUrl: [
              'https://www.ghibli.jp/gallery/kimitachi003.jpg',
              'https://www.ghibli.jp/gallery/kimitachi007.jpg',
              'https://www.ghibli.jp/gallery/kimitachi017.jpg',
            ],
            is_enabled: 1,
            num: 1,
            origin_price: 22222,
            price: 222,
            title: '蒼鷺與少年',
            unit: '週',
          },
          product_id: '-NrJnquvlVsB9GBHterk',
          qty: 2,
          total: 444,
        },
        '-NrJocw-Kkz6aZ-3vOJL': {
          final_total: 1140,
          id: '-NrJocw-Kkz6aZ-3vOJL',
          product: {
            category: '電影',
            content:
              '《借物少女艾莉緹》（日語：借りぐらしのアリエッティ，英語：The Secret World of Arrietty），日語原意為「借居的艾莉緹」，是日本吉卜力工作室2010年上映的動畫電影，劇情改編自英國小說家瑪麗·諾頓的奇幻小說《地板下的小矮人》。本片聲優名單於2010年4月12日公佈 ，同年7月17日在日本上映。為米林宏昌執導的首部電影，宮崎駿負責本片企劃及劇本編寫。\n一位名叫翔的少年因為心臟病的關係，被帶到郊外的小屋裡療養。來到小屋時，他偶然在草堆叢中看見一個約10公分左右的女性小矮人。\n\n那群居住在屋子下的小矮人們，為求生存會在人類不注意的情況下，偷偷取走一些人類的日常用品並裝入背包中帶回居所使用，而他們稱呼這種行為名：借物。\n\n那名被翔發現的女性小矮人，艾莉緹，得知自己被偷看時相當驚恐，但隨後便得知翔並沒有惡意後，便慢慢試著跟翔接觸，並與他展開了一段小小的友情。',
            description:
              '導演:米林宏昌\n監製:鈴木敏夫\n編劇:宮崎駿、丹羽圭子\n原著:瑪麗·諾頓\n主演:神木隆之介、志田未來、三浦友和、大竹忍、竹下景子、藤原龍也\n配樂:賽西兒·柯貝爾\n片尾曲:〈艾莉緹之歌〉\n攝影:奧井敦\n剪輯:瀨山武司\n製片商:吉卜力工作室\n片長:94分鐘\n產地: 日本\n語言:日語',
            id: '-NoLZyNGxYtp7l-sdwwI',
            imageUrl: 'https://www.ghibli.jp/images/karigurashi.jpg',
            imagesUrl: [
              'https://www.ghibli.jp/gallery/karigurashi006.jpg',
              'https://www.ghibli.jp/gallery/karigurashi027.jpg',
              'https://www.ghibli.jp/gallery/karigurashi038.jpg',
              'https://www.ghibli.jp/gallery/karigurashi044.jpg',
            ],
            is_enabled: 1,
            num: 1,
            origin_price: 420,
            price: 380,
            title: '借物少女艾莉緹',
            unit: '週',
          },
          product_id: '-NrJnswpNBYzauOO9lSt',
          qty: 3,
          total: 1140,
        },
      },
      total: 1584,
      user: {
        address: 'test',
        email: 'test@gmail.com',
        name: 'test',
        tel: '0900999000',
      },
      num: 1,
    },
    {
      create_at: 1706706758,
      id: '-NpUdanazbZHax19z8wi',
      is_paid: false,
      message: '你好',
      products: {
        '-NpUdaoxEzIevr108TuE': {
          final_total: 350,
          id: '-NpUdaoxEzIevr108TuE',
          product: {
            category: '電影',
            content:
              '《貓的報恩》（日語：猫の恩返し，中國大陸、臺灣和新加坡譯做《貓的報恩》，港澳譯做《貓之報恩》）是吉卜力工作室2002年推出的一部動畫電影，片名叫做《貓的報恩》的原因就是因為故事裡的主角小春救了一隻貓王國的王子，貓王國的貓國王為了報答她而來的。故事改編自漫畫家柊葵的漫畫。於2002年第6回文部省文化廳媒體藝術祭獲選動畫部門優秀獎。\n\n與吉卜力另一部短篇動畫《Ghiblies episode2》，為同時在戲院上映的作品。片尾曲〈幻化成風〉被馬來西亞女歌手梁靜茹翻唱成為〈小手拉大手〉。',
            description:
              '原作:柊葵\n導演:森田宏幸\n編劇:吉田玲子\n人物設定:森川聰子\n音樂:野見祐二\n動畫製作:吉卜力工作室\n製作:「貓的報恩」製作委員會\n上映日期:2002年7月30日\n影片長度:75分鐘',
            id: '-NoLUrag7THsSkL4gxzJ',
            imageUrl: 'https://www.ghibli.jp/images/baron.jpg',
            imagesUrl: [
              'https://www.ghibli.jp/gallery/baron001.jpg',
              'https://www.ghibli.jp/gallery/baron018.jpg',
              'https://www.ghibli.jp/gallery/baron035.jpg',
              'https://www.ghibli.jp/gallery/baron048.jpg',
            ],
            is_enabled: 1,
            origin_price: 390,
            price: 350,
            title: '貓的報恩',
            unit: '週',
          },
          product_id: '-NoLUrag7THsSkL4gxzJ',
          qty: 1,
          total: 350,
        },
        '-NpUdaoxEzIevr108TuF': {
          final_total: 1500,
          id: '-NpUdaoxEzIevr108TuF',
          product: {
            category: '電影',
            content:
              '《天空之城》（日語：天空の城ラピュタ）是一部由吉卜力工作室製作、宮崎駿執導，於1986年8月2日首映的日本動畫電影，作品的原作、導演、劇本和角色設定皆由宮崎駿擔任。此作也是吉卜力工作室首次公開的劇院作品，由東映發行。\n\n《天空之城》的故事背景約設定在19世紀後期的蒸氣龐克虛構世界，講述一位技工學徒的少年和一位持有神秘礦石的少女相遇，又與政府軍隊、特務和海盜爭相尋找傳說中的天空之城「拉普達」的冒險故事。這部電影在1986年獲得Animage動漫大獎並得到積極的評價，票房收入超過1600萬美元。截至2021年《天空之城》在票房、家庭影像和配樂方面的總收入約1.57億美元。\n\n《天空之城》對日本流行文化的影響相當廣大，影響日本國內與海外大量的動畫及漫畫系列作品。在當代也被譽為是蒸汽龐克和柴油龐克流派中最具有影響力的代表作品。在關於最佳動畫電影列表的日本民意調查中，《天空之城》在2006年文化廳媒體藝術祭上被評為第二佳動畫電影，在2008年Oricon觀眾投票中被評為第一名。',
            description:
              '導演:宮崎駿\n監製:高畑勳\n編劇:宮崎駿\n主演:田中真弓、橫澤啟子、寺田農、初井言榮、常田富士男、永井一郎、神山卓三、安原義人、亀山助清、槐柳二、糸博、鷲尾真知子、TARAKO\n配樂:久石讓\n片尾曲:井上杏美〈伴隨著你〉\n攝影:高橋宏固\n剪輯:瀨山武司\n音效:徳間書店\n製片商:吉卜力工作室\n片長:124分鐘\n產地:日本\n語言:日語\n導演:宮崎駿',
            id: '-NoHbDLGuUC1ZZRxfNS1',
            imageUrl: 'https://www.ghibli.jp/images/laputa.jpg',
            imagesUrl: [
              'https://www.ghibli.jp/gallery/laputa004.jpg',
              'https://www.ghibli.jp/gallery/laputa018.jpg',
              'https://www.ghibli.jp/gallery/laputa040.jpg',
            ],
            is_enabled: 1,
            num: 4,
            origin_price: 300,
            price: 250,
            title: '天空之城',
            unit: '週',
          },
          product_id: '-NoHbDLGuUC1ZZRxfNS1',
          qty: 6,
          total: 1500,
        },
        '-NpUdaoycbs8--dHrAz4': {
          final_total: 200,
          id: '-NpUdaoycbs8--dHrAz4',
          product: {
            category: '電影',
            content:
              '《風之谷》（日語：風の谷のナウシカ）是一部由Topcraft製作，宮崎駿執導，於1984年3月11日首映的日本末日幻想奇幻動畫電影，該電影劇情根據宮崎駿於《Animage》上所連載的同名漫畫所改編。\n\n該片由Topcraft為德間書店和博報堂製作，交由東映發行。作曲家久石讓首次與宮崎駿合作為電影譜曲。電影主要配音演員包括島本須美、松田洋治、榊原良子、納谷悟朗等人。作品描述在一個過去古文明曾遭受到毀滅的未知世界中，一位叫做「娜烏西卡」少女的冒險故事。\n\n《風之谷》於1984年3月11日在日本上映。美國及其他市場則在1980年代中後期發行大幅剪輯的版本，名為《戰士之風》。宮崎駿對這個被剪輯的版本表示不滿，並在2005年由華特迪士尼影業推出了未剪輯、重新配音的版本來取代。雖然此部電影是在吉卜力工作室成立之前製作，但它通常被認為是吉卜力工作室的作品之一，並作為吉卜力工作室收藏DVD和藍光系列的一部分發行。自上映以來，該電影受到了極高的評價，讚譽主要集中在其故事情節、主題、角色和動畫上。除了獲得來自於《電影旬報》、每日電影獎等方面的獎項外，往後也被日本文化廳視為是最好的國產動畫之一，以及被世界自然基金會挑選為呼籲社會大眾關注環境公害、動物保育議題的作品。',
            description:
              '導演:宮崎駿\n監製:高畑勳\n製片:德間康快、近藤道生\n編劇:宮崎駿\n原著:風之谷\n主演:島本須美、松田洋治、榊原良子、納谷悟朗\n配樂:久石讓\n攝影:白神孝始\n剪輯:木田伴子、金子尚樹、酒井正次\n製片商:Topcraft\n片長:117分鐘\n產地:日本\n語言:日文',
            id: '-NoHX4RqrWpXIC-4QUVv',
            imageUrl: 'https://www.ghibli.jp/images/nausicaa.jpg',
            imagesUrl: [
              'https://www.ghibli.jp/gallery/nausicaa050.jpg',
              'https://www.ghibli.jp/gallery/nausicaa003.jpg',
            ],
            is_enabled: 1,
            num: 1,
            origin_price: 350,
            price: 200,
            title: '風之谷',
            unit: '週',
          },
          product_id: '-NoHX4RqrWpXIC-4QUVv',
          qty: 1,
          total: 200,
        },
        '-NpUdaoycbs8--dHrAz5': {
          final_total: 222,
          id: '-NpUdaoycbs8--dHrAz5',
          product: {
            category: '電影',
            content:
              '《蒼鷺與少年》（日語：君たちはどう生きるか，英語：The Boy and the Heron）是一部2023年上映的日本動畫電影，由宮崎駿執導兼編劇，吉卜力工作室製作。電影原文片名是引用自小說家吉野源三郎在1937年發表的著書《你想活出怎樣的人生》，內容則為宮崎駿原創。劇情講述少年牧眞人在母親因火災喪生後與一隻會說話的蒼鷺相遇，展開不可思議的探索旅程。\n\n宮崎駿過去曾於2013年發表《風起》後宣布引退，在經歷一段時間後，打算繼續製作動畫電影而復出，此部作品是他間隔《風起》10年後再度推出的作品。\n\n廣告手法上，《蒼鷺與少年》是吉卜力工作室少數不進行宣傳，未釋出預告片和劇照，便直接在院線上映的動畫電影。上映後在日本國內獲得的評價普遍兩極，動畫視覺效果、製作、音樂、美術為評論家稱讚的焦點，但同時也有部份評論認為故事偏向艱澀不易理解、配音演出難以讓人融入情境。票房方面在日本上映首日便突破4億日圓，影片賣座的同時也間接帶動吉野源三郎著書的銷售量和再版。\n\n此部影片在日本海外的東亞、北美、歐洲等地上映時同樣獲得許多迴響，在全球票房有突破1億美元的成績，並得到包括第81屆金球獎在內許多國際影評協會頒贈的最佳動畫片獎項肯定。也在第51屆安妮獎與新海誠執導的《鈴芽之旅》並列7項獎項提名，成為日本動畫電影歷年入圍安妮獎獎項數目之最。',
            description:
              '導演\t宮崎駿\n監製\t鈴木敏夫\n編劇\t宮崎駿\n故事\t宮崎駿\n原著\t你想活出怎樣的人生\n主演\t\n山時聰真\n菅田將暉\n柴咲幸\n愛繆\n木村佳乃\n木村拓哉\n配樂\t久石讓\n片尾曲\t《地球儀》\n攝影\t奧井敦\n剪輯\t瀬山武司\n製片商\t吉卜力工作室\n片長\t124分鐘\n產地\t日本\n語言\t日語',
            id: '-NpJcz_4YQX2Fu6P4dAE',
            imageUrl: 'https://www.ghibli.jp/images/kimitachi.jpg',
            imagesUrl: [
              'https://www.ghibli.jp/gallery/kimitachi003.jpg',
              'https://www.ghibli.jp/gallery/kimitachi007.jpg',
              'https://www.ghibli.jp/gallery/kimitachi017.jpg',
            ],
            is_enabled: 1,
            num: 1,
            origin_price: 22222,
            price: 222,
            title: '蒼鷺與少年',
            unit: '週',
          },
          product_id: '-NpJcz_4YQX2Fu6P4dAE',
          qty: 1,
          total: 222,
        },
      },
      total: 2272,
      user: {
        address: '路邊',
        email: '123456@gmail.com',
        name: 'ABC',
        tel: '0933333333',
      },
      num: 2,
    },
  ],
  pagination: {
    total_pages: 1,
    current_page: 1,
    has_pre: false,
    has_next: false,
    category: '',
  },
  messages: [],
};
export default {
  data() {
    return {
      orders: data.orders,
      pagination: data.pagination,
    };
  },
  components: { PaginationComponent },
  methods: {
    timeFormat(timestamp) {
      return new Date(timestamp * 1000).toLocaleString('zh-TW');
    },
    readProducts(page = 1) {
      console.log(page);
    },
  },
};
</script>
