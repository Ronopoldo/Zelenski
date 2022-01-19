const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Рабит'));
app.listen(port, () => console.log(`Локальный адрес: http://localhost:${port}`));
// require('events').EventEmitter.defaultMaxListeners = 0
const Discord = require('discord.js-12');

const client = new Discord.Client();
const guild = client.guilds.cache.get("544902879534907392");
client.on('ready', () => {
  console.log(`Залогинен как ${client.user.tag}!`);
});

let active = false;

// массив слов и ответов
let answers = [
  ['2022', 'ЛОХИ ВОНЮЧИЕ! Я ВАМ УЖЕ 3-ИЙ ГОД НИЧЕГО НЕ ЖЕЛАЮ! АХХАХАХАХАА\nНАДЕЮСЬ, В НОВОМ ГОДУ ВЫ ОТПИШИТЕСЬ ОТ РОНИ, СДОХНИТЕ И ВАС ИЗОБЬЮТ ШИЗИКИ  И УКРАДУТ РАЗБЕЙНИКИ МУВХХААЗАЗАХХАА']
  ['/report', '<#647052942045741066> ы'],
  ['Дурак', '	Сам такой! >:('],
  ['-_-', 'НАХУЙ ИДИ ПИДОР! ОТБРОС БЛЯТЬ! ЛИВАЙ С СЕРВА ЗАЕБАЛ'],
  ['даун', 'Не оскорбляй себя! >:)'],
  ['<@852202671443804160> дурак', 'СЛЫШЬǃ САм.=+_ЫЫЫх=----...ERRRRRRRRRRRRRRRRRRRRRRRRR\D[KPNIGFDHSMWKY/GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG\IKKKKKKKKKKKKKKKKK/]}'],
  ['зефирка', '	https://tenor.com/PqiP.gif'],
  ['Наклз', '	https://tenor.com/WDKa.gif'],
  ['Зеленский вор', '	НЕТ! ПУТИН ВОР!!!'],
  ['Путин вор', 'Полностью согласен'],
  ['Рони лох', '**Я - ЗАЩИТНИК РОНИ! АЗАЗАХЗА! ПРАВДА ОН МЕНЯ НЕНАВИДИТ//**'],
  ['Блуви топ', '**Ага)**'],
  ['Блуви не топ', '**Ага)**'],
  ['err', '**__errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr__**'],
  ['/play firelight by kubbi', '	**ЙО! ТОПОВЫЙ МУЗЗОООООННН!**'],
  ['Ленин', '	Он крутой! НО УКРАИНИ НЕ НАДА ЕГО ЗНАТИ!!!!'],
  ['<@544902183007813652>', 'ИДИ НАХЕР ТУПОЙ ПИНГИР! Я ТВОЮ МАТЬ В ЖОПУ ЕБАЛ! НАХУЙ ТЫ РОНИ ПИНГИШЬ?!! А?'], //Лел) Зачим пингуем? Если я в сети, то можете не пинговать, а если что, то пингуйте в крайнем случае) Лел
  ['Умри', '/tts САМ УМРИ!'],
  ['что может Андрей', 'Андрей ничего не может'],
  ['эпик', 'Epic'],
  ['АМОГУс', 'https://media.discordapp.net/attachments/647050821594251264/904468159011094548/GIF-4d8ab0052fb86a44a933c4fe23bbe74b.gif'],
  ['хохол', 'ВАЩЭ ПАЭХАВШЫЙ ШТОЛЕ?!?!?! iЩО РАС СКАЖЫШ ЕТА СЛОВА ТИБЕ ПРОСТА ПИПЭЦ КАК ПЛОХА БУДИТ!! ПАШОЛ АТСЮДА! ТЕБЕ ТУД НИ РАДЫ!!!'],
  ['хохл', 'ВАЩЭ ПАЭХАВШЫЙ ШТОЛЕ?!?!?! iЩО РАС СКАЖЫШ ЕТА СЛОВА ТИБЕ ПРОСТА ПИПЭЦ КАК ПЛОХА БУДИТ!! ПАШОЛ АТСЮДА! ТЕБЕ ТУД НИ РАДЫ!!!'],
  ['бебр', 'МАЛЧИ ТУД! ЦЕ НЕ УКРАИНСКАЕ СЛОВА И ВАЩЭ ЕТА СЛОВА ТУПОЙ РАСИИ! ПАШОЛ ВОН АТСЕДА!!! РАЗБЕНiК ТИ!'],
  ['бэбр', 'МАЛЧИ ТУД! ЦЕ НЕ УКРАИНСКАЕ СЛОВА И ВАЩЭ ЕТА СЛОВА ТУПОЙ РАСИИ! ПАШОЛ ВОН АТСЕДА!!! РАЗБЕНiК ТИ!'],
  ['Зелень', '	ТЫ ЧО?? АФИГЕЛ? БАН ТЕБЕ!!!'],
  ['Трамп', '	он мой Батя.'],
  ['дай админку', 'НИ В КОЕМ СЛУЧАЕ!!!!'],
  ['Путин не вор', 'НЕТ ОН ВОООООООР!!!!!!'],
  ['Андрей лох', 'ДАДАДАДАДАДАДДАДАДАДАДАДА, СОГЛАСЕН'],
  ['бля', 'НЕ МАТЕРИСЬ!'],
  ['Зеленский хакер', 'ДА Я ЖЕ ГОВОРЮ НЕТТТТТ!!'],
  ['Убейте зеленского', '	САМ УБЕЙСЯ!!'],
  ['Зелень вор', 'ТЫ ЕЩЕ ПОСМЕЛ МЕНЯ ОБЗЫВАТЬ В ДВОЙНЕ???? <:BAN:657276771628089365>'],
  ['REEE', 'RRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'],
  ['_Ы_', '_ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ_'],
  ['По моим данным — нет', '	Че, это ДА'],
  ['Зеленский не вор', 'Вау, спасибо, #### раз уже слышу'],
  ['Зеленый вор', 'ТЫ ВООООООР!'],
  ['Пока я спать', '	Не забудь с собой взять меня )))'],
  ['Мне пора пока', 'дАСвидас '],
  ['-ЫЫЫ-', 'https://cdn.discordapp.com/attachments/647217596743286806/648990658173992970/image.jpg'],
  ['Чикибамбони', 'https://memepedia.ru/wp-content/uploads/2019/09/chikibamboni-3-768x610.jpg'],
  ['Блуви', '	ЙО! БЛУВИ! БЛУУУВИИИИИ! БЛУУУУУВИИИИИИИИИ'],
  ['Зеленый', '	СЛЫШЬ?? КОГО ТЫ ЗЕЛЕНЫМ НАЗВАЛ?'],
  ['Зелёный', '	СЛЫШЬ?? КОГО ТЫ ЗЕЛЕНЫМ НАЗВАЛ?'],
  ['Рони', '	ШО РОНИ?? ВЫ ИМЕЛИ ВВИДУ ЗЕЛЕНСКИЙ? НЕТ? ДОСТАЛИ(( Я ИМ ВООБЩЕ НЕ НУЖЕН! ИМ ТОЛЬКО РОНИ ПОДАВАЙ! РАЗБЕЙНИКИ ВЫ!'],
  ['Ыы', '	Ыыыыы'],
  ['Андреййй', '	АНДРЕЕЕЕЙ???????'],
  ['Заткнись', '	ЭТО ТЫ МНЕ?? ИДИОТ ВОНЮЧИЙ! ПЕРДУНЧИК!'],
  ['здесь /rank но я отключу его, наверное уже всех бесит', 'ДЕБИЛЫ! ДОСТАЛИ ЕГО СПРАШИВАТЬ(( СО МНОЙ НИКОМУ НЕ ИНТЕРЕСНО ОБЩАТЬСЯ! >:('],
  ['Зеленский топ', '	ООООО! ХОТЬ КТО ТО НОРМАЛЬНЫЙ!'],
  ['Зеленский', '	ДА ЗАДОЛБАЛИ ВЫ МЕНЯ! ОТСТАНЬТЕ, ИДИОТЫ! >:('],
  ['Зеленого', 'СЛЫШЬ! ТЫ САМ ЗЕЛЕНЫЙ! >:('],
  ['Зеленому', 'СЛЫШЬ! ТЫ САМ ЗЕЛЕНЫЙ! >:('],
  ['Зелёного', 'СЛЫШЬ! ТЫ САМ ЗЕЛЕНЫЙ! >:('],
  ['Зелёному', 'СЛЫШЬ! ТЫ САМ ЗЕЛЕНЫЙ! >:('],
  ['СЛОМАТЬ ВСЕ!', '/s'],
  ['/s', 'СЛОМАТЬ ВСЕ!'],
  ['Вселенная', '	не Стивена! А ЗЕЛЕНСКОГО!!!!!'],
  ['Зеленский читер', '	Я НЕ ХАКЕР! >:('],
  ['Аха', '	ОБОРЖАТЬСЯ ПРОСТО! ПЕРДУН ПЕРДЮЧИЙ!'],
  ['Аза', '	ОБОРЖАТЬСЯ ПРОСТО! ПЕРДУН ПЕРДЮЧИЙ!'],
  ['Пх', '	ОБОРЖАТЬСЯ ПРОСТО! ПЕРДУН ПЕРДЮЧИЙ!'],
  ['зх', '	ОБОРЖАТЬСЯ ПРОСТО! ПЕРДУН ПЕРДЮЧИЙ!'],
  ['азп', '	ОБОРЖАТЬСЯ ПРОСТО! ПЕРДУН ПЕРДЮЧИЙ!'],
  ['не робот', 'Я НЕ РОБОТ! Я СЛЕЖУ ЗА ВАМИ!!! В ТОМ ЧИСЛЕ ЗА ТОБОЙ!'],
  ['Боже', '	ГДЕ БОХ САЛА?'],
  ['Идиот', '	ТЫ НА КОГО ЛЕЗЕШЬ?'],
  ['/old', '	Заявка отправлена'],
  ['блин', 'БЛИНЫ МНЕ ТВАЙА МАМА ГОТОВИЦ БУДЕД! ИДИ НАФЕК!'],
  ['блен', 'БЛЕНЫ МНЕ ТВАЙА МАМА ГОТОВИЦ БУДЕД! ИДИ НАФЕК!'],

  ['тьфу', 'https://cdn.discordapp.com/attachments/560495172618682378/653564209036263425/video0.mov'],
  ['Лимбос', '	Да че этого придурка обсуждать??// Главное - зачем?'],
  ['Limbos', '	Да че этого придурка обсуждать??// Главное - зачем?'],
  ['лох', 'ТЫ ЛОХ, ЯСНО???'],
  ['желаю всего хорошего', '**ЛОХИ ВОНЮЧИЕ! Я ВАМ НИЧЕГО НЕ ЖЕЛАЮ И В ЭТОМ ГОДУ! АХХАХАХАХАА**\nНАДЕЮСЬ, В НОВОМ ГОДУ ВЫ ОТПИШИТЕСЬ ОТ РОНИ И СДОХНИТЕ ОТ КОРОНАВИРУСА'],
  ['Зеленский, пробуди всех', 'everyone RRRRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeee'],
  ['Зефирка лох', 'сам такой'],
  ['Тригеред', 'TRIGGEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEED'],

  ['<@155149108183695360>', '	Ты рил тупой'],
  ['ммм', 'ПОШЕЛ ТЫ КОРОВА ТУПАЙА ЙА ИЗ ТИБЯ САЛА СДЕЛАЙУ И БОГУ ПРОДАМ ЛОХ ТЫ ТУПОИ'],
  ['Привет	', '	ПОКА ТЫ ЛОХ МУХЗХПЗАХЗПХАЗХПАЗ'],
  ['класс', 'ТЫ В 1 КЛАССЕ ЯСНА'],
  [':(', 'ЧО ГРУСТИШ?! ПАШОЛ ТЫ НАФЕК ТАКОИ ГРУСНЫЙ!'],
  [':C', 'ЧО ГРУСТИШ?! ПАШОЛ ТЫ НАФЕК ТАКОИ ГРУСНЫЙ!'],
  [':С', 'ЧО ГРУСТИШ?! ПАШОЛ ТЫ НАФЕК ТАКОИ ГРУСНЫЙ!'],
  ['xd', 'ЧО ТЫ ТУТ РЖОШ!?!?!?!?!? ВАЩЭ ШТОЛЕ СТРАХ ПАТИРЯЛ! Я ТИБЯ СИЙЧАС УЗНАЮ ПО ОЙПИ!'],
  ['хд', 'ЧО ТЫ ТУТ РЖОШ!?!?!?!?!? ВАЩЭ ШТОЛЕ СТРАХ ПАТИРЯЛ! Я ТИБЯ СИЙЧАС УЗНАЮ ПО ОЙПИ!'],
  ['чо', '	НИЧО!'],
  [';-;', '	НУ ТЫ И ТУПОЙ! САМ ВЕТЬ НЕ ЗНАЕШ ШТО ЭТО ЗНАЧИТ!'],
  ['каво', 'НИКАВО! ЗАТКНИС ЖЫВА!'],
  ['пон', '	МНЕ ПЛЕВАЦ ПОН ТЫ ИЛЕ НЕ ПОН! Я НЕ ПОН И ТОЧЬКА ЗОТКНИС ЖЫВА'],
  ['ээ', '	ЧО ЭКОИШ ТЫ ТУПОИ ЗОТКНИС И ДАЙ САЛА ЦЕ ДЛЯ МЕНЯ!'],
  ['Ты мне', 'НЕТ Я СЕБЕ ЗОТКНИС ТЫ МОИ РАБ А ЙА ГЛАВНЫЙ!'],
  ['))', 'Ты плоха себя ведешь! Разбейник ты! Це плохо улыбаться!'],
  ['0)', 'Ты плоха себя ведешь! Разбейник ты! Це плохо улыбаться!'],
  [')0', 'Ты плоха себя ведешь! Разбейник ты! Це плохо улыбаться!'],
  ['((', 'Чо ты грустишь? Тебя заставляли делать это? Выйде атсуда разбейник!'],
  ['(9', 'Чо ты грустишь? Тебя заставляли делать это? Выйде атсуда разбейник!'],
  ['9(', 'Чо ты грустишь? Тебя заставляли делать это? Выйде атсуда разбейник!'],
  ['бле', 'Ах ты разбейник!!! ЧУТЬ МАТНОЕ СЛОВО НЕ СКАЗАЛ! Смотри мне'],
  ['блять', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['ебать', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['ебал', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['сука', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['нахуй', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['нах', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['хуй', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['ебло', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['пидор', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['пидр', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['бля', '	ТЫ ЧО МАТЕРИШЬСЯ?! СОВСЕМ СТРАХ ПОТЕРЯЛ?! Разбейник ты! Уходи отсюдово! Це плохо материться!'],
  ['аще умаще ондрей уебан', '	ебать, как ты это нашел???'],
  ['бл', 'Он хотел сказать БЛИН... Наверное//'],
  ['салам', 'ИДИ НАФИК! ТЫ РАЗБЕЙНИК! ПОКА НАФИК! НЕ ЗДОРОВОЙМА ТУТ ИДЕОД!'],
  ['Утк', 'Нужно поклоняться утке!'],
  ['ля', 'ЧО ЛЯКАЕЩЬ?! ПОЕХОВШЫЙ ШТОЛЕ?!??!?!?! ИДЕОД МОЛЧИ ТУД У ТИБЯ МАТЕРЬ В КАНАВИ!'],
  ['мут', 'ЛАХ! Я ТИБЕ ДАМ МУД НА 82176542164124214861278 ЛЕД! САСИ БОТЯРА ГЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ'],
  ['варн', 'ТЫ ОФЕГЕЛ?!?! Я ТИБЯ ЩЯЗ ЗОВАРНУ! У МИНЯ ЕСТЦ ПРОВА ГЛАВНАВА АДМИНА ЩЯС БУДИШ С ВАРНОМ НА 27 ЛЕТ СИДЕТЬ ТАК ШТО МОЛЧИ ТУД!'],
  ['бан', 'СЛЫШ! ЩЯЗ ТИБЯ ЗОБАНИМ ТУТ, ПОНЕЛ?!'],
  ['просто', 'сложно'],
  ['прода', 'СЕРВИР ПРОДАН РОНЕ ПРОДАН МИНЯ ТОЖЭ ПРОДОДУТ?!'],
  ['пздц', 'ТИШЫ! НЕ ГОВОРИ ТАКОВА СЛОВА ПОНЕЛ!?!?!?']
];

// обработка входящих сообщений
client.on('message', msg => {
  try {
    if (msg.member.roles.cache.has("828667331286794291")) {
      for (let i = 0; i < answers.length; i++) {
        let textToFind = answers[i][0].toLowerCase();
        if (msg.content.toLowerCase().includes(textToFind)) {

          let chid = msg.channel.id
          let usid = msg.member.id
          let usdp = msg.member.displayName
          let msgid = msg.id
          var Test1 = [`Триггер с дикой картой. Юзер: __**`, usdp, '**__ (', usid, '). Канал __**<#', chid, '>**__. Сообщение (айди): ', msgid, '. Триггер: __**', textToFind, '**__'];
          let Test2 = Test1.join('');
          console.log(Test2)
          client.channels.cache.get('852701746186027048').send(Test2 + '.').catch(err => {});


          msg.channel.send(answers[i][1] + '.').catch(err => {})
          break;
        }
      }
    }
  } catch (err) { msg.reply(err) }
});


// массив слов и ответов
let answers1 = [
  ['Да', 'Нет'],
  ['Нет', 'Да'],
  ['Нет, ты дурак!', 'Нет, ты дурак!'],

  ['б', '__**БУБУН ЕБАНЫЙ ЧО НАДО? САМЫЙ УМНЫЙ ТУТ??? РЕАКЦИИ МОИ ЧЕКАТЬ РЕШИЛ!**__'],
  ['в', '	__**ВОНЯЕШЬ ТЫ КАК РОНЯ!! ЛОХ ТУПОЙ! ВЭКАЙ САМ СЕБЕ, А МЕНЯ НЕ ТРОГАЙ БЛЯТЬ**__'],
  ['г', '	__**ГОВНО СОБАЧЕЕ! МОЛЧИ В УГОЛОЧКЕ ЕБЛАН ТЫ СТАРЫЙ! Я ТАКИХ КАК ТЫ ЩЁЛКАЮ НА ЗАВТРАК!**__'],
  ['...', 'ПОШЕЛ НАФИГ ЧМО ТЫ ВАЩЭ! ЦЕ НЕКУЛЬТУРНО МНОГА ТОЧИК СТАВИТЬ ТЫ ЗНАЕШ ЭТО А Я ДА!'],
  ['мм', 'ПОШЕЛ ТЫ КОРОВА ТУПАЙА ЙА ИЗ ТИБЯ САЛА СДЕЛАЙУ И БОГУ ПРОДАМ ЛОХ ТЫ ТУПОИ'],
  ['Э', 'ЧО ЭКОИШ ТЫ ТУПОИ ЗОТКНИС И ДАЙ САЛА ЦЕ ДЛЯ МЕНЯ!'],
  [')', 'Ты плоха себя ведешь! Разбейник ты! Це плохо улыбаться!'],
  ['(', 'Чо ты грустишь? Тебя заставляли делать это? Выйде атсуда разбейник!'],
  ['8', '(800) 555 - 35 - 35'],
  ['чё', 'НИЧЁ'],
  ['чё?', 'НИЧЁ'],
  ['че', 'НИЧЁ'],
  ['че?', 'НИЧЁ'],
];

// обработка входящих сообщений
client.on('message', msg => {
  try {
    if (msg.member.roles.cache.has("828667331286794291")) {
      for (let i = 0; i < answers1.length; i++) {
        let textToFind1 = answers1[i][0].toLowerCase();
        if (msg.content.toLowerCase() === textToFind1) {
          let chid = msg.channel.id
          let usid = msg.member.id
          let usdp = msg.member.displayName
          let msgid = msg.id
          var Test1 = [`Триггер без дикой карты. Юзер: __**`, usdp, '**__ (', usid, '). Канал __**<#', chid, '>**__. Сообщение (айди): ', msgid, '. Триггер: __**', textToFind1, '**__'];
          let Test2 = Test1.join('');
          client.channels.cache.get('852701746186027048').send(Test2 + '.').catch(err => {});
          console.log(Test2)

          msg.channel.send(answers1[i][1] + '.').catch(err => {})

          break;
        }
      }
    }
  } catch (err) { }
});


////////////////////С ПИНГАМИ


client.on('message', msg => {
  try {
    if (msg.member.roles.cache.has("828667331286794291")) {
      if (msg.content.toLowerCase().includes("пока")) {

        let chid = msg.channel.id
        let usid = msg.member.id
        let usdp = msg.member.displayName
        let msgid = msg.id
        var Test1 = [`Триггер без дикой карты. Юзер: __**`, usdp, '**__ (', usid, '). Канал __**<#', chid, '>**__. Сообщение (айди): ', msgid, '. Триггер: __**пока**__'];
        let Test2 = Test1.join('');
        client.channels.cache.get('852701746186027048').send(Test2 + '.').catch(err => {});
        msg.channel.send(`Проваливай, <@${msg.member.id}>! ТЫ ИДИОТИНА! Не возвращайся`).catch(err => {})
      }
    }
  } catch (err) { }
});

client.on('message', msg => {
  try {
    if (msg.member.roles.cache.has("828667331286794291")) {
      if ((msg.content.toLowerCase().includes("зеленый вор")) || (msg.content.toLowerCase().includes("зелёный вор"))) {

        let chid = msg.channel.id
        let usid = msg.member.id
        let usdp = msg.member.displayName
        let msgid = msg.id
        var Test1 = [`Триггер без дикой карты. Юзер: __**`, usdp, '**__ (', usid, '). Канал __**<#', chid, '>**__. Сообщение (айди): ', msgid, '. Триггер: __**зеленый вор**__'];
        let Test2 = Test1.join('');
        client.channels.cache.get('852701746186027048').send(Test2 + '.').catch(err => {});
        console.log(Test2)

        msg.channel.send(`everyone <@${msg.member.id}> ВООООР!`).catch(err => {})
      }
    }
  } catch (err) { }
});

client.on('message', msg => {
  try {
    if (msg.member.roles.cache.has("828667331286794291")) {
      if (msg.content.toLowerCase() === "а") {

        let chid = msg.channel.id
        let usid = msg.member.id
        let usdp = msg.member.displayName
        let msgid = msg.id
        var Test1 = [`Триггер без дикой карты. Юзер: __**`, usdp, '**__ (', usid, '). Канал __**<#', chid, '>**. Сообщение (айди): ', msgid, '. Триггер: __**а**__'];
        let Test2 = Test1.join('');
        client.channels.cache.get('852701746186027048').send(Test2 + '.');
        console.log(Test2)

        msg.channel.send(`__**АУТИЗМ 999 ЛВЛА У <@${msg.member.id}>а! ИДИ НАХУЙ ЕБЛАН!**__`).catch(err => {});



        //
      }
    }
  } catch (err) { }
});


client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  client.user.setActivity('КАК УБИВАТЦ ТУПЫХ РАНАПОЛЬД!!!', { type: 'WATCHING' });
});













