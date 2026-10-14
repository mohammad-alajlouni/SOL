(function () {
  const P = {
    home: 'M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5H15v-6h-6v6H5.5A1.5 1.5 0 0 1 4 19z',
    cup: 'M5.5 7.5h13l-1.6 12.2a1 1 0 0 1-1 .8H8.1a1 1 0 0 1-1-.8z M4.5 7.5h15 M7 7.5l.6-3h8.8l.6 3',
    bag: 'M5.5 8h13l-1 12h-11z M9 8V6.5a3 3 0 0 1 6 0V8',
    star: 'M12 3.8l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8z',
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4.5 20.5c1-3.7 4-5.5 7.5-5.5s6.5 1.8 7.5 5.5',
    search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20 20l-4-4',
    heart: 'M12 20s-7.5-4.5-7.5-10A4.3 4.3 0 0 1 12 7.2 4.3 4.3 0 0 1 19.5 10c0 5.5-7.5 10-7.5 10z',
    plus: 'M12 5v14 M5 12h14', minus: 'M5 12h14',
    arrow: 'M5 12h14 M13 6l6 6-6 6', back: 'M15 5l-7 7 7 7', chev: 'M9 5l7 7-7 7', down: 'M5 9l7 7 7-7',
    close: 'M6 6l12 12 M18 6 6 18',
    bell: 'M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z M10 20.5a2 2 0 0 0 4 0',
    pin: 'M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
    clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2',
    card: 'M3.5 6.5h17v11h-17z M3.5 10h17 M7 14.5h3',
    sliders: 'M4 7h10 M18 7h2 M4 17h4 M12 17h8 M16 5v4 M10 15v4',
    check: 'M5 12.5l4.5 4.5L19 7.5',
    globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z',
    tag: 'M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1 1 0 0 1 0 1.4l-7.3 7.3a1 1 0 0 1-1.4 0z M8 8h.01',
    gift: 'M4 9h16v4H4z M5.5 13v7.5h13V13 M12 9v11.5 M12 9C9 9 7.5 7.8 7.5 6.3S9 3.6 12 9c3-5.4 4.5-4.2 4.5-2.7S15 9 12 9',
    help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6 M12 17h.01',
    logout: 'M14 4H6.5A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H14 M10 12h10 M17 8.5l3.5 3.5-3.5 3.5',
    edit: 'M4 20h4L19 9l-4-4L4 16z', trash: 'M5 7h14 M9.5 7V4.5h5V7 M6.5 7l1 13h9l1-13',
    phone: 'M6.5 3.5h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z',
    nav: 'M20 4 4 11l7 2 2 7z', shield: 'M12 3.5 19 6v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z',
    filter: 'M4 6h16 M7 12h10 M10 18h4', mail: 'M3.5 6h17v12h-17z M4 6.5l8 6.5 8-6.5',
    cake: 'M4 20h16 M5 20v-7h14v7 M5 15.5c2.3 1.5 4.7 1.5 7 0s4.7-1.5 7 0 M12 13V9 M12 6.5v.01',
    ice: 'M6 6h5v5H6z M13 8h5v5h-5z M8 13h5v5H8z', drop: 'M12 3.5s6 6.4 6 10.5a6 6 0 0 1-12 0c0-4.1 6-10.5 6-10.5z',
    bolt: 'M13 3 5 13.5h6L10 21l8-10.5h-6z', calendar: 'M4 6h16v14H4z M4 10h16 M8 3.5v4 M16 3.5v4',
    receipt: 'M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z M9 8.5h6 M9 12h6', repeat: 'M4 12a6 6 0 0 1 6-6h9 M16 3l3 3-3 3 M20 12a6 6 0 0 1-6 6H5 M8 21l-3-3 3-3',
    car: 'M5 16.5h14 M4.5 16.5V12l2-4.5h11l2 4.5v4.5 M4.5 12h15 M7 16.5v2 M17 16.5v2 M7.5 14h.01 M16.5 14h.01',
    moon: 'M19 14.5A7.5 7.5 0 1 1 9.5 5a6 6 0 0 0 9.5 9.5z', more: 'M6 12h.01 M12 12h.01 M18 12h.01'
  };
  const icon = (R, name, o = {}) => R.createElement('svg', {
    key: name, width: '1em', height: '1em', viewBox: '0 0 24 24', fill: o.fill || 'none', stroke: o.stroke || 'currentColor',
    strokeWidth: o.sw || 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', style: { display: 'block', flex: 'none', transform: o.flip ? 'scaleX(-1)' : undefined }
  }, R.createElement('path', { d: P[name] }));
  const icons = (R, rtl) => {
    const o = {};
    Object.keys(P).forEach(k => { o[k] = icon(R, k, { flip: rtl && ['arrow', 'back', 'chev', 'logout'].includes(k) }); });
    o.heartFill = icon(R, 'heart', { fill: '#E25A50', stroke: '#E25A50' });
    o.starFill = icon(R, 'star', { fill: 'currentColor' });
    o.homeFill = icon(R, 'home', { fill: 'currentColor' });
    o.checkBold = icon(R, 'check', { sw: 2.4 });
    o.plusBold = icon(R, 'plus', { sw: 2.2 });
    o.minusBold = icon(R, 'minus', { sw: 2.2 });
    o.names = Object.keys(P);
    return o;
  };

  // Hollow "sol" wordmark: solid vertical line drops into an outlined wordmark and fills it with color.
  const mark = (R, o = {}) => {
    const s = o.size || 120, color = o.color || '#E25A50', ar = !!o.ar, text = ar ? 'سول' : 'sol';
    const st = o.stroke != null ? o.stroke : Math.max(1.4, s * 0.028);
    const lw = o.lineW != null ? o.lineW : Math.max(2, s * 0.032);
    const line = o.line != null ? o.line : s * 0.6;
    const dip = (o.dip != null ? o.dip : (ar ? 0.27 : 0.25)) * s;
    const lx = o.lineX != null ? o.lineX : (ar ? -s * 0.045 : s * 0.105);
    const fat = o.bold != null ? o.bold : s * 0.022;
    const fill = o.fill || 'full', lvl = o.level != null ? o.level : 0.58;
    const anim = o.anim || 'none', d = o.delay || 0, dur = o.dur || 1.3;
    const clip = fill === 'full' ? 'inset(0 0 0 0)' : fill === 'level' ? `inset(${lvl * 100}% 0 0 0)` : 'inset(0 0 100% 0)';
    const fillAnim = { pour: 'solFromTop', rise: 'solFromBottom', spread: fill === 'level' ? 'solFromCenterLvl' : 'solFromCenter', fade: 'solFadeOnly' }[anim];
    const bg = o.bg || '#F4F0E8';
    const txt = { fontFamily: "'Baloo Bhaijaan 2', 'Readex Pro', sans-serif", fontWeight: 800, fontSize: s, lineHeight: 1, whiteSpace: 'nowrap', letterSpacing: ar ? 0 : '-0.03em', display: 'block', direction: ar ? 'rtl' : 'ltr' };
    const lineEl = line > 0 ? R.createElement('div', { key: 'l', style: { position: 'absolute', left: '50%', top: 0, width: lw, marginLeft: -lw / 2 + lx, height: line + dip + st * 1.6, background: color, borderRadius: lw, zIndex: 2, transformOrigin: 'top', animation: anim !== 'none' ? `solDrop .7s cubic-bezier(.6,0,.2,1) ${d}s both` : undefined } }) : null;
    const lyr = (key, c, sw, extra) => R.createElement('span', { key, style: { ...txt, color: c, WebkitTextStroke: sw + 'px ' + c, ...(extra || {}) } }, text);
    const fadeA = anim !== 'none' ? `solFadeOnly .6s ease ${d}s both` : undefined;
    return R.createElement('div', { key: o.key, style: { position: 'relative', display: 'inline-block', paddingTop: line, flex: 'none' } }, [
      lineEl,
      R.createElement('div', { key: 'w', style: { position: 'relative', padding: fat + st } }, [
        lyr('o', color, 2 * (fat + st), { animation: fadeA }),
        lyr('b', bg, 2 * fat, { position: 'absolute', inset: fat + st, animation: fadeA }),
        lyr('x', color, 2 * fat, { position: 'absolute', inset: fat + st, clipPath: clip, '--lvl': lvl * 100 + '%', animation: fillAnim ? `${fillAnim} ${dur}s cubic-bezier(.5,0,.2,1) ${d + 0.55}s both` : undefined })
      ])
    ]);
  };

  const AR = '٠١٢٣٤٥٦٧٨٩';
  const num = (n, L) => L === 'ar' ? String(n).replace(/\d/g, x => AR[x]).replace('.', '٫') : String(n);
  const price = (n, L) => L === 'ar' ? `${num(n, L)} ر.س` : `SAR ${n}`;

  const T = {
    tagline: ['SOL IN THE AREA', 'SOL IN THE AREA'], trio: ['Coffee · Dessert · Good company', 'قهوة · حلى · صحبة طيبة'],
    ob1Title: ['Good coffee,\nsimple pleasures', 'قهوة طيبة،\nومتعة بسيطة'],
    ob1Body: ['Order ahead, then collect it at the counter or stay in your car and we’ll bring it out.', 'اطلب مسبقًا، ثم استلمه من المنضدة أو ابقَ في سيارتك ونحضره لك.'],
    ob2Title: ['Dessert makes\nit better', 'الحلى يكمّل\nالقهوة'],
    ob2Body: ['Fresh cakes and slices from our counter, paired with your cup.', 'كيك وحلويات طازجة من منضدتنا، تناسب كوبك.'],
    skip: ['Skip', 'تخطي'], next: ['Next', 'التالي'], getStarted: ['Get started', 'ابدأ الآن'],
    welcomeTitle: ['Welcome to SOL', 'أهلًا بك في سول'],
    welcomeBody: ['A modern coffee spot with a relaxed and welcoming atmosphere.', 'مقهى عصري بأجواء هادئة ومرحّبة.'],
    createAccount: ['Create account', 'إنشاء حساب'], signIn: ['Sign in', 'تسجيل الدخول'], guest: ['Continue as guest', 'المتابعة كضيف'],
    signInTitle: ['Welcome back', 'أهلًا بعودتك'], signInBody: ['Enter your phone number and we’ll text you a code.', 'أدخل رقم جوالك وسنرسل لك رمز التحقق.'],
    phone: ['Phone number', 'رقم الجوال'], cont: ['Continue', 'متابعة'], or: ['or', 'أو'],
    apple: ['Continue with Apple', 'المتابعة عبر Apple'], google: ['Continue with Google', 'المتابعة عبر Google'],
    newTo: ['New to SOL?', 'جديد في سول؟'], terms: ['By continuing you agree to our Terms and Privacy Policy.', 'بالمتابعة، أنت توافق على الشروط وسياسة الخصوصية.'],
    signUpTitle: ['Create your account', 'أنشئ حسابك'], signUpBody: ['A few details and your first drink is on us.', 'بعض التفاصيل، ومشروبك الأول علينا.'],
    fullName: ['Full name', 'الاسم الكامل'], email: ['Email', 'البريد الإلكتروني'], birthday: ['Birthday', 'تاريخ الميلاد'],
    bdayHint: ['We’ll treat you on your day', 'نحتفل بك في يومك'], haveAccount: ['Already have an account?', 'لديك حساب؟'],
    nameVal: ['Noura Al-Harbi', 'نورة الحربي'], phoneVal: ['50 123 4567', '٥٠ ١٢٣ ٤٥٦٧'], cc: ['+966', '+966'], emailVal: ['noura@mail.com', 'noura@mail.com'], bdayVal: ['14 March', '١٤ مارس'],
    greeting: ['Good morning, Noura', 'صباح الخير، نورة'], pickupFrom: ['Pickup at', 'الاستلام من'], storeName: ['SOL Coffee · Rafha', 'سول كوفي · رفحاء'],
    search: ['Search coffee, dessert…', 'ابحث عن قهوة، حلى…'], heroEyebrow: ['Good coffee\nSimple pleasures', 'قهوة طيبة\nمتعة بسيطة'], heroTitle: ['SOL\nIN THE\nAREA', 'سول\nفي\nالمنطقة'],
    orderNow: ['Order now', 'اطلب الآن'], viewMenu: ['View menu', 'تصفح المنيو'], categories: ['Categories', 'الأقسام'],
    favorites: ['Our favorites', 'المفضلة لدينا'], seeAll: ['See all', 'عرض الكل'], recommended: ['Picked for you', 'مختارة لك'],
    usualTitle: ['Your usual?', 'طلبك المعتاد؟'], usualBody: ['Iced Americano · Medium · Oat', 'آيس أمريكانو · وسط · شوفان'], reorder: ['Reorder', 'أعد الطلب'],
    tabHome: ['Home', 'الرئيسية'], tabMenu: ['Menu', 'المنيو'], tabOrders: ['Orders', 'الطلبات'], tabRewards: ['Rewards', 'المكافآت'], tabProfile: ['Profile', 'حسابي'],
    menuTitle: ['Menu', 'المنيو'], menuBody: ['Brewed in-house, every day.', 'نحضّرها في المقهى، كل يوم.'],
    icedTitle: ['Iced drinks', 'مشروبات باردة'], fAll: ['All', 'الكل'], fEspresso: ['Espresso', 'إسبريسو'], fMilk: ['With milk', 'بالحليب'], fCold: ['Cold brew', 'كولد برو'],
    resultsN: ['6 drinks', '٦ مشروبات'], sort: ['Popular', 'الأكثر طلبًا'],
    detailDesc: ['A double shot of our house espresso over ice and cold water. Clean, bold and refreshing.', 'جرعتان من إسبريسو سول فوق الثلج والماء البارد. نقي وقوي ومنعش.'],
    size: ['Size', 'الحجم'], small: ['Small', 'صغير'], medium: ['Medium', 'وسط'], large: ['Large', 'كبير'],
    ml1: ['240 ml', '٢٤٠ مل'], ml2: ['350 ml', '٣٥٠ مل'], ml3: ['470 ml', '٤٧٠ مل'],
    customize: ['Customize', 'خصّص مشروبك'], customizeBody: ['Milk, sweetness, extras', 'الحليب، السكر، الإضافات'], addToOrder: ['Add to order', 'أضف إلى الطلب'],
    kcal: ['15 kcal', '١٥ سعرة'], caffeine: ['150 mg caffeine', '١٥٠ ملغ كافيين'], rating: ['4.9 (320)', '٤٫٩ (٣٢٠)'], pairs: ['Pairs well with', 'يُقدَّم مع'],
    milk: ['Milk', 'الحليب'], mFull: ['Full fat', 'كامل الدسم'], mOat: ['Oat', 'شوفان'], mAlmond: ['Almond', 'لوز'], mNone: ['No milk', 'بدون'],
    sugar: ['Sweetness', 'السكر'], s0: ['None', 'بدون'], s1: ['Light', 'خفيف'], s2: ['Regular', 'عادي'], s3: ['Extra', 'زيادة'],
    ice: ['Ice', 'الثلج'], iLess: ['Less', 'قليل'], iReg: ['Regular', 'عادي'], iExtra: ['Extra', 'زيادة'],
    extras: ['Extras', 'الإضافات'], xShot: ['Extra shot', 'جرعة إسبريسو إضافية'], xVanilla: ['Vanilla syrup', 'شراب الفانيلا'], xCaramel: ['Caramel drizzle', 'صوص الكراميل'],
    note: ['Note for the barista', 'ملاحظة للباريستا'], notePh: ['e.g. half the ice, please', 'مثال: نصف كمية الثلج'],
    optional: ['Optional', 'اختياري'], required: ['Required', 'مطلوب'], upTo2: ['Up to 2', 'حتى ٢'],
    favTitle: ['Favorites', 'المفضلة'], favBody: ['6 saved items', '٦ عناصر محفوظة'],
    cartTitle: ['Your order', 'طلبك'], completeIt: ['Complete your order', 'أكمل طلبك'], subtotal: ['Subtotal', 'المجموع الفرعي'],
    reward: ['SOL reward', 'مكافأة سول'], vat: ['VAT incl. (15%)', 'شامل الضريبة (١٥٪)'], total: ['Total', 'الإجمالي'], checkout: ['Checkout', 'إتمام الطلب'],
    promo: ['Promo code', 'رمز الخصم'], promoVal: ['AFTERNOON', 'AFTERNOON'], applied: ['Applied', 'تم التطبيق'], items3: ['3 items', '٣ عناصر'],
    checkoutTitle: ['Checkout', 'إتمام الطلب'], pickup: ['Pickup', 'استلام'], delivery: ['Delivery', 'توصيل'], store: ['Store', 'الفرع'],
    storeAddr: ['Olaya St, Riyadh · 1.2 km', 'شارع العليا، الرياض · ١٫٢ كم'], pickupTime: ['Pickup time', 'وقت الاستلام'],
    asap: ['As soon as possible', 'في أقرب وقت'], asapSub: ['Ready in 8–10 min', 'جاهز خلال ٨–١٠ دقائق'], schedule: ['Schedule', 'جدولة'],
    payment: ['Payment', 'الدفع'], change: ['Change', 'تغيير'], placeOrder: ['Place order', 'تأكيد الطلب'], summary: ['Summary', 'الملخص'],
    payTitle: ['Payment method', 'طريقة الدفع'], applePay: ['Apple Pay', 'Apple Pay'], mada: ['mada •••• 8813', 'مدى •••• 8813'], visa: ['Visa •••• 4021', 'فيزا •••• 4021'],
    stc: ['STC Pay', 'STC Pay'], wallet: ['SOL wallet', 'محفظة سول'], walletBal: ['Balance SAR 42', 'الرصيد ٤٢ ر.س'], cash: ['Pay at the counter', 'الدفع في الفرع'],
    addCard: ['Add new card', 'إضافة بطاقة جديدة'], dflt: ['Default', 'افتراضي'], useMethod: ['Use this method', 'استخدم هذه الطريقة'], cards: ['Cards', 'البطاقات'], other: ['Other', 'خيارات أخرى'],
    successTitle: ['Your order is in', 'استلمنا طلبك'], successBody: ['We’re brewing it now and will let you know the moment it’s ready.', 'نحضّره الآن، وسنبلغك فور جاهزيته.'],
    orderNo: ['#SOL-2041', '#SOL-2041'], readyIn: ['Ready in', 'جاهز خلال'], mins: ['8 min', '٨ دقائق'], trackOrder: ['Track order', 'تتبع الطلب'], backHome: ['Back to home', 'العودة للرئيسية'],
    earned: ['+18 points added to your card', 'أُضيفت ١٨ نقطة إلى بطاقتك'],
    trackTitle: ['Order #SOL-2041', 'طلب #SOL-2041'], stReceived: ['Order received', 'تم استلام الطلب'], stBrewing: ['Brewing', 'قيد التحضير'], stReady: ['Ready for pickup', 'جاهز للاستلام'], stDone: ['Picked up', 'تم الاستلام'],
    t1: ['8:42 AM', '٨:٤٢ ص'], t2: ['8:44 AM', '٨:٤٤ ص'], t3: ['Est. 8:51 AM', 'متوقع ٨:٥١ ص'], baristaOn: ['Faisal is preparing your order', 'فيصل يحضّر طلبك الآن'],
    directions: ['Directions', 'الاتجاهات'], call: ['Call', 'اتصال'], almost: ['Almost there', 'اقترب موعد طلبك'], minLeft: ['6', '٦'], minUnit: ['min', 'دقائق'],
    ordersTitle: ['My orders', 'طلباتي'], active: ['Active', 'الحالية'], past: ['Past', 'السابقة'], details: ['Details', 'التفاصيل'], completed: ['Completed', 'مكتمل'], brewing: ['Brewing', 'قيد التحضير'],
    member: ['Gold member · since 2025', 'عضو ذهبي · منذ ٢٠٢٥'], points: ['points', 'نقطة'], edit: ['Edit', 'تعديل'],
    addresses: ['Addresses', 'العناوين'], paymentMethods: ['Payment methods', 'طرق الدفع'], notifications: ['Notifications', 'الإشعارات'], offers: ['Offers', 'العروض'],
    settings: ['Settings', 'الإعدادات'], help: ['Help & support', 'المساعدة والدعم'], signOut: ['Sign out', 'تسجيل الخروج'], favShort: ['Favorites', 'المفضلة'],
    addrTitle: ['Addresses', 'العناوين'], addNew: ['Add new address', 'إضافة عنوان جديد'], saved: ['Saved', 'المحفوظة'], nearby: ['SOL near you', 'فروع سول القريبة'], setDefault: ['Default', 'افتراضي'],
    today: ['Today', 'اليوم'], earlier: ['Earlier', 'سابقًا'], markRead: ['Mark all read', 'تحديد الكل كمقروء'],
    offersTitle: ['Offers', 'العروض'], offersBody: ['Little reasons to come by.', 'أسباب صغيرة لزيارتنا.'], useOffer: ['Use offer', 'استخدم العرض'], code: ['Code', 'الرمز'],
    rewardsTitle: ['SOL Rewards', 'مكافآت سول'], cupCard: ['Your cup card', 'بطاقة الأكواب'], cupsLeft: ['3 more cups for a free drink', 'باقي ٣ أكواب لمشروب مجاني'], cups7: ['7 / 10', '٧ / ١٠'],
    pointsBal: ['1,240', '١٬٢٤٠'], gold: ['Gold', 'ذهبي'], nextTier: ['260 points to Platinum', '٢٦٠ نقطة للمستوى البلاتيني'], redeem: ['Redeem', 'استبدال'], redeemTitle: ['Redeem points', 'استبدل نقاطك'],
    howEarn: ['1 point for every SAR 1', 'نقطة لكل ١ ر.س'], pts: ['pts', 'نقطة'],
    recent: ['Recent', 'عمليات البحث الأخيرة'], clear: ['Clear', 'مسح'], popular: ['Popular now', 'الأكثر طلبًا الآن'], results: ['Results for “latte”', 'نتائج «لاتيه»'], searchVal: ['latte', 'لاتيه'], cancel: ['Cancel', 'إلغاء'],
    settingsTitle: ['Settings', 'الإعدادات'], language: ['Language', 'اللغة'], prefs: ['Preferences', 'التفضيلات'], about: ['About', 'حول التطبيق'], account: ['Account', 'الحساب'],
    nOrder: ['Order updates', 'تحديثات الطلب'], nPromo: ['Offers & news', 'العروض والأخبار'], location: ['Location access', 'الوصول للموقع'], defaultStore: ['Default store', 'الفرع المفضل'],
    privacy: ['Privacy policy', 'سياسة الخصوصية'], termsShort: ['Terms of use', 'شروط الاستخدام'], deleteAcc: ['Delete account', 'حذف الحساب'], version: ['Version 1.0.0', 'الإصدار ١٫٠٫٠'],
    whileUse: ['While using', 'أثناء الاستخدام'],
    startBrowsing: ['Start browsing', 'ابدأ التصفح'], browseNote: ['No account needed to browse. You’ll verify your email only when you check out.', 'لا تحتاج حسابًا للتصفح. ستؤكد بريدك فقط عند إتمام الطلب.'],
    returning: ['Ordered with us before?', 'طلبت منا من قبل؟'], signInEmail: ['Sign in with email', 'الدخول بالبريد'], guestHello: ['Good morning', 'صباح الخير'],
    sVerify: ['Verify email', 'تأكيد البريد'], sPickup: ['Pickup', 'الاستلام'], sConfirm: ['Confirm', 'المراجعة'],
    emailTitle: ['What’s your email?', 'ما بريدك الإلكتروني؟'], emailBody: ['We’ll send a 6-digit code to confirm it. No password, no phone number.', 'سنرسل رمزًا من ٦ أرقام لتأكيده. بدون كلمة مرور أو رقم جوال.'],
    cartSaved: ['Your cart is saved · 3 items', 'سلتك محفوظة · ٣ عناصر'], sendCode: ['Send code', 'أرسل الرمز'], newAccNote: ['First time? Your account is created when you verify.', 'أول مرة؟ يُنشأ حسابك تلقائيًا بعد التأكيد.'],
    otpTitle: ['Check your inbox', 'تحقق من بريدك'], otpBody: ['Enter the 6-digit code we sent to', 'أدخل الرمز المكوّن من ٦ أرقام المرسل إلى'],
    expiresIn: ['Expires in 09:42', 'ينتهي خلال ٠٩:٤٢'], resendIn: ['Resend in 0:28', 'إعادة الإرسال بعد ٠:٢٨'], changeEmail: ['Change email', 'تغيير البريد'], verify: ['Verify & continue', 'تأكيد ومتابعة'],
    otpWrong: ['That code isn’t right. 2 attempts left.', 'الرمز غير صحيح. تبقّت محاولتان.'], otpExpired: ['This code has expired', 'انتهت صلاحية الرمز'],
    otpExpiredBody: ['Codes are valid for 10 minutes. Send a new one and your cart stays as it is.', 'الرمز صالح لمدة ١٠ دقائق. أرسل رمزًا جديدًا وستبقى سلتك كما هي.'], resendNow: ['Resend code', 'إعادة إرسال الرمز'], expired: ['Expired', 'منتهي'],
    verified: ['Email verified · signed in as noura@mail.com', 'تم تأكيد البريد · noura@mail.com'],
    branch: ['Pickup branch', 'فرع الاستلام'], branchName: ['SOL Coffee — Rafha', 'سول كوفي — رفحاء'], branchAddr: ['Rafha, Northern Borders, Saudi Arabia', 'رفحاء، منطقة الحدود الشمالية'],
    openNow: ['Open now · until 1 AM', 'مفتوح الآن · حتى ١ ص'], googleMaps: ['Google Maps', 'خرائط Google'], appleMaps: ['Apple Maps', 'خرائط Apple'],
    pickupMethod: ['Pickup method', 'طريقة الاستلام'], inStore: ['In-store', 'من الفرع'], inStoreSub: ['Collect at the counter', 'استلمه من المنضدة'], carPickup: ['Car pickup', 'من السيارة'], carPickupSub: ['We bring it to your car', 'نحضره إلى سيارتك'],
    readyBy: ['Estimated ready time', 'وقت التجهيز المتوقع'], readyVal: ['8–10 min after you confirm', '٨–١٠ دقائق بعد التأكيد'], orderSummary: ['Order summary', 'ملخص الطلب'], confirmOrder: ['Confirm order', 'تأكيد الطلب'],
    vehicle: ['Your car', 'سيارتك'], savedVehicles: ['Saved vehicles', 'السيارات المحفوظة'], vehiclesBody: ['Saved cars fill in automatically when you choose car pickup.', 'تُعبّأ بيانات السيارة تلقائيًا عند اختيار الاستلام من السيارة.'],
    brand: ['Brand', 'الشركة'], model: ['Model', 'الطراز'], color: ['Color', 'اللون'], plate: ['License plate', 'رقم اللوحة'], notesPh: ['Notes, e.g. parked by the entrance', 'ملاحظات، مثال: أمام المدخل'],
    saveVehicle: ['Save this car for next time', 'احفظ السيارة للطلبات القادمة'], addVehicle: ['Add a car', 'إضافة سيارة'], newCar: ['New car', 'سيارة جديدة'], car2: ['Hyundai Tucson', 'هيونداي توسان'],
    brandVal: ['Toyota', 'تويوتا'], modelVal: ['Camry', 'كامري'], colorVal: ['White', 'أبيض'], carSummary: ['White Toyota Camry', 'تويوتا كامري بيضاء'],
    stPlaced: ['Order placed', 'تم تقديم الطلب'], stPreparing: ['Preparing', 'قيد التحضير'], stReady2: ['Ready for pickup', 'جاهز للاستلام'], stCompleted: ['Completed', 'مكتمل'],
    readyNow: ['Your order is ready', 'طلبك جاهز'], waitingFor: ['Ready since 8:51 AM · SOL Coffee Rafha', 'جاهز منذ ٨:٥١ ص · سول كوفي رفحاء'], arrivedBtn: ['I’ve arrived', 'وصلت'],
    arrivedHint: ['Tap when you’re parked outside and we’ll bring it to your car.', 'اضغط عند وصولك وسنحضر الطلب إلى سيارتك.'],
    orderDetails: ['Order details', 'تفاصيل الطلب'], pickedUpAt: ['Picked up · Sat, 11 Oct · 8:58 AM', 'تم الاستلام · السبت ١١ أكتوبر · ٨:٥٨ ص'], paidWith: ['Paid with Apple Pay', 'تم الدفع عبر Apple Pay'],
    receipt: ['Receipt', 'الإيصال'], ourBranch: ['Our branch', 'فرعنا'], accountEmail: ['Account email', 'البريد الإلكتروني'], pickupAt: ['Pickup at', 'الاستلام من'],
    verifyAtCheckout: ['Checking out takes a quick email code. No password.', 'إتمام الطلب يحتاج رمزًا عبر البريد فقط، بدون كلمة مرور.'], directionsShort: ['Directions', 'الاتجاهات'], back: ['Back', 'رجوع']
  };

  const P_ = [
    ['ia', 'Iced Americano', 'آيس أمريكانو', 'Rich & smooth', 'غني وناعم', 18, 'hero', 'center 35%', 'iced'],
    ['sl', 'Iced Spanish Latte', 'آيس سبانش لاتيه', 'Sweet & creamy', 'حلو وكريمي', 22, 'icedcup', 'center 40%', 'iced'],
    ['ha', 'Hot Americano', 'أمريكانو حار', 'Balanced & clean', 'متوازن ونقي', 16, 'americano', 'center', 'hot'],
    ['fw', 'Flat White', 'فلات وايت', 'Velvety & bold', 'مخملي وقوي', 19, 'hotcup', 'center 60%', 'hot'],
    ['cb', 'Cold Brew', 'كولد برو', 'Steeped for 18 hours', 'منقوع ١٨ ساعة', 20, 'ref3', 'center 55%', 'iced'],
    ['co', 'Cortado', 'كورتادو', 'Short & strong', 'قصير ومركّز', 15, 'cuptop', 'center 30%', 'hot'],
    ['cc', 'Chocolate Cake', 'كيكة الشوكولاتة', 'Rich & indulgent', 'غنية ولذيذة', 24, 'choc', 'center', 'dessert'],
    ['hw', 'Hazelnut Wafer Slice', 'شريحة الويفر بالبندق', 'Layered & crunchy', 'طبقات مقرمشة', 22, 'cake', '25% center', 'dessert'],
    ['pc', 'Pecan Caramel Slice', 'شريحة البيكان بالكراميل', 'Nutty & golden', 'بالمكسرات والكراميل', 26, 'ctx2', '88% 75%', 'dessert']
  ];
  const pick = (a, L) => L === 'ar' ? a[1] : a[0];

  const data = (L) => {
    const ar = L === 'ar';
    const prods = P_.map(p => ({ id: p[0], name: ar ? p[2] : p[1], desc: ar ? p[4] : p[3], price: price(p[5], L), n: p[5], img: 'assets/' + p[6] + '.jpg', pos: p[7], cat: p[8] }));
    const by = id => prods.find(p => p.id === id);
    const tr = a => ar ? a[1] : a[0];
    return {
      prods, by,
      cats: [
        [['Hot coffee', 'قهوة حارة'], ['12 drinks', '١٢ مشروبًا'], 'hotcup', 'center 65%'],
        [['Iced drinks', 'مشروبات باردة'], ['10 drinks', '١٠ مشروبات'], 'icedcup', 'center 55%'],
        [['Desserts', 'حلويات'], ['8 items', '٨ أصناف'], 'choc', 'center'],
        [['SOL signatures', 'مشروبات سول'], ['6 drinks', '٦ مشروبات'], 'duo', 'center 60%'],
        [['Coffee & cake', 'قهوة وكيك'], ['4 bundles', '٤ عروض'], 'ctx1', '60% center'],
        [['Beans & goods', 'البن والمنتجات'], ['5 items', '٥ منتجات'], 'liner', 'center']
      ].map(c => ({ name: tr(c[0]), count: tr(c[1]), img: 'assets/' + c[2] + '.jpg', pos: c[3] })),
      cart: [
        { p: by('ia'), opts: tr(['Medium · Oat milk · Less ice', 'وسط · حليب شوفان · ثلج قليل']), qty: num(2, L), line: price(36, L) },
        { p: by('fw'), opts: tr(['Small · Full fat · Light sugar', 'صغير · كامل الدسم · سكر خفيف']), qty: num(1, L), line: price(19, L) },
        { p: by('cc'), opts: tr(['Slice', 'شريحة']), qty: num(1, L), line: price(24, L) }
      ],
      notifsToday: [
        { icon: 'bag', title: tr(['Your order is ready', 'طلبك جاهز']), body: tr(['Head to SOL Coffee Rafha and tap “I’ve arrived” once you’re parked.', 'توجّه إلى سول كوفي رفحاء واضغط «وصلت» عند وقوفك.']), time: tr(['2m', '٢ د']), unread: true },
        { icon: 'car', title: tr(['The team knows you’re here', 'الفريق يعلم بوصولك']), body: tr(['Bringing your order out to the white Toyota Camry.', 'نحضر طلبك الآن إلى التويوتا كامري البيضاء.']), time: tr(['Now', 'الآن']), unread: true }
      ],
      notifsEarlier: [
        { icon: 'mail', title: tr(['Welcome to SOL', 'أهلًا بك في سول']), body: tr(['Your email is verified and your account is ready.', 'تم تأكيد بريدك وحسابك جاهز.']), time: tr(['Mon', 'الإثنين']), unread: false },
        { icon: 'tag', title: tr(['Two-for-one afternoons', 'عصرية ١+١']), body: tr(['Every weekday 3–5 PM on iced drinks.', 'أيام الأسبوع من ٣ إلى ٥ م على المشروبات الباردة.']), time: tr(['Mon', 'الإثنين']), unread: false },
        { icon: 'receipt', title: tr(['Receipt for #SOL-1988', 'إيصال الطلب #SOL-1988']), body: tr(['SAR 44 paid with Apple Pay · Car pickup.', 'تم دفع ٤٤ ر.س عبر Apple Pay · من السيارة.']), time: tr(['Sat', 'السبت']), unread: false }
      ],
      pastOrders: [
        { no: '#SOL-1988', date: tr(['Sat, 11 Oct · Car pickup', 'السبت ١١ أكتوبر · من السيارة']), items: tr(['Iced Spanish Latte, Hazelnut Wafer Slice', 'آيس سبانش لاتيه، شريحة الويفر بالبندق']), total: price(44, L), imgs: [by('sl').img, by('hw').img] },
        { no: '#SOL-1952', date: tr(['Wed, 8 Oct · In-store', 'الأربعاء ٨ أكتوبر · من الفرع']), items: tr(['Flat White ×2', 'فلات وايت ×٢']), total: price(38, L), imgs: [by('fw').img] },
        { no: '#SOL-1907', date: tr(['Sun, 5 Oct · Car pickup', 'الأحد ٥ أكتوبر · من السيارة']), items: tr(['Cold Brew, Chocolate Cake', 'كولد برو، كيكة الشوكولاتة']), total: price(44, L), imgs: [by('cb').img, by('cc').img] }
      ],
      addresses: [
        { icon: 'home', label: tr(['Home', 'المنزل']), line: tr(['King Fahd Rd, Al Olaya, Riyadh', 'طريق الملك فهد، العليا، الرياض']), dflt: true },
        { icon: 'bag', label: tr(['Work', 'العمل']), line: tr(['Digital City, Building 4, Riyadh', 'المدينة الرقمية، مبنى ٤، الرياض']), dflt: false }
      ],
      stores: [
        { name: tr(['SOL · Al Olaya', 'سول · العليا']), meta: tr(['1.2 km · Open until 1 AM', '١٫٢ كم · مفتوح حتى ١ ص']), img: 'assets/sofa.jpg' },
        { name: tr(['SOL · Digital City', 'سول · المدينة الرقمية']), meta: tr(['4.8 km · Open until 12 AM', '٤٫٨ كم · مفتوح حتى ١٢ ص']), img: 'assets/chairs.jpg' }
      ],
      rewards: [
        { name: tr(['Free pastry', 'معجنات مجانية']), pts: num(400, L), img: 'assets/cake.jpg', ok: true },
        { name: tr(['Any drink, any size', 'أي مشروب بأي حجم']), pts: num(800, L), img: 'assets/duo.jpg', ok: true },
        { name: tr(['SOL tray & liner set', 'صينية سول مع الورق']), pts: num('1,500', L).replace(',', '٬'), img: 'assets/liner.jpg', ok: false }
      ],
      recent: [tr(['spanish latte', 'سبانش لاتيه']), tr(['chocolate cake', 'كيكة شوكولاتة']), tr(['cold brew', 'كولد برو'])],
      popular: [by('ia'), by('cc'), by('fw')],
      results: [by('sl'), by('fw'), by('co')],
      stamps: Array.from({ length: 10 }, (_, i) => ({ on: i < 7 }))
    };
  };

  const t = (L) => { const o = {}; Object.keys(T).forEach(k => { o[k] = T[k][L === 'ar' ? 1 : 0]; }); return o; };
  window.SOL = { icon, icons, mark, t, data, num, price, pick };
})();
