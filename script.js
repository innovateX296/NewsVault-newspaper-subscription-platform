/* ============================================
   NewsVault - Complete JavaScript
   ============================================ */

'use strict';

// =========== DATA ===========

const ARTICLES = [
  { id: 0, cat: 'space', title: 'Chandrayaan-4 Mission: India Reaches New Heights in Space Exploration', excerpt: 'India\'s space agency achieves another milestone with the successful lunar sample return mission, marking a new era for Indian space exploration and scientific discovery.', date: '2025-05-04', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop', views: 48291, author: 'Dr. Meena Krishnan', readTime: '5 min', body: `<p>In a historic achievement that has placed India among the world's foremost space powers, the Indian Space Research Organisation (ISRO) successfully completed the Chandrayaan-4 mission's lunar sample return phase on Sunday. Scientists and engineers at the Satish Dhawan Space Centre erupted in celebration as the return module safely landed in the Arabian Sea off the Gujarati coast.</p><h3>Mission Highlights</h3><p>The mission, which was launched eight months ago, carried a sophisticated robotic arm capable of collecting over 2 kg of lunar regolith from the Moon's southern polar region — an area believed to contain ancient water ice deposits. The samples are now en route to ISRO's lunar sample laboratory in Bengaluru.</p><p>"This is not just a scientific achievement for India — it is a gift to all of humanity," said ISRO Chairman Dr. S. Somanath at the post-mission press conference. "The lunar samples will help scientists understand the early history of the solar system and may provide clues about water's origins on Earth."</p><h3>What's Next for ISRO?</h3><p>Following this success, ISRO has announced an accelerated timeline for the Gaganyaan crewed spaceflight mission. The first uncrewed test flight, featuring the Vyommitra humanoid robot, is scheduled for later this year. The crewed mission, which will send three Indian astronauts to space for a three-day orbital mission, is targeted for 2026.</p><p>The success of Chandrayaan-4 has already attracted international attention, with NASA, ESA, and JAXA all expressing interest in collaborative research using the lunar samples. This international recognition underscores India's emergence as a credible and capable space power.</p>` },
  { id: 1, cat: 'scheme', title: 'PM Digital India 3.0: ₹1 Lakh Crore Boost to Rural Connectivity', excerpt: 'The government announces a landmark scheme to provide high-speed internet to 6 lakh villages across India by 2026, transforming rural India\'s digital landscape.', date: '2025-05-04', img: 'https://images.unsplash.com/photo-1529079018732-bdb88456f8c2?w=600&h=400&fit=crop', views: 32100, author: 'Rajan Sharma', readTime: '4 min', body: `<p>The Union Cabinet, chaired by Prime Minister Narendra Modi, on Thursday approved the Digital India 3.0 initiative with a total outlay of ₹1,02,844 crore. The flagship programme aims to provide high-speed broadband connectivity to approximately 6 lakh gram panchayats across the country by December 2026.</p><h3>Key Components of Digital India 3.0</h3><p>The initiative has three major pillars: BharatNet Phase III, which will lay 15 lakh km of optical fibre; the PM Digital Literacy Mission, targeting 10 crore citizens; and the India AI Infrastructure Programme, which will establish sovereign cloud data centres in 10 cities.</p><p>The scheme will create an estimated 1.5 crore direct and indirect jobs, according to the IT Ministry's estimates. The government has also announced a ₹500 monthly digital allowance for Below Poverty Line (BPL) families to access internet services under the Pradhan Mantri Gramin Digital Saksharta Abhiyan extension.</p><h3>Impact on Rural Education and Healthcare</h3><p>Education and healthcare are expected to be the biggest beneficiaries of the initiative. Over 2.5 lakh government schools will be equipped with smart classrooms, and 1.5 lakh rural health centres will gain telemedicine capabilities, directly benefiting over 40 crore citizens in remote areas of the country.</p>` },
  { id: 2, cat: 'technology', title: 'AI Revolution: India Launches National AI Mission with $1.2 Billion Fund', excerpt: 'The National AI Mission aims to build indigenous AI models and position India as a global AI powerhouse by 2030, with massive investments in compute infrastructure.', date: '2025-05-03', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop', views: 61430, author: 'Priya Nair', readTime: '6 min', body: `<p>India has taken a decisive leap into the artificial intelligence era with the launch of the IndiaAI Mission, backed by a corpus of approximately $1.2 billion (₹10,000 crore). The mission, unveiled by the Ministry of Electronics and Information Technology (MeitY), is India's most ambitious technology initiative since the Digital India programme.</p><h3>Core Pillars of the Mission</h3><p>The mission is structured around five pillars: compute infrastructure, foundation model development, startup ecosystem support, AI skills development, and responsible AI governance. The government plans to set up a shared AI compute grid of 10,000+ GPUs accessible to startups, researchers, and government agencies at subsidised rates.</p><p>Notably, the mission will fund the development of Bharat-GPT — a family of multilingual large language models supporting all 22 scheduled languages of India. The model, being developed by a consortium of IITs, IISc, and private companies, is expected to launch in beta by early 2026.</p><h3>International Collaborations</h3><p>India has signed AI cooperation agreements with the United States, European Union, Japan, and Singapore as part of this mission. These agreements will facilitate technology transfers, joint research programmes, and cross-border data-sharing frameworks essential for training advanced AI systems.</p>` },
  { id: 3, cat: 'political', title: 'Parliament Passes One Nation One Election Bill in Winter Session', excerpt: 'After months of debate, the Lok Sabha passed the Constitution Amendment Bill with 360 votes in favour, paving the way for simultaneous elections across India.', date: '2025-05-03', img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop', views: 55200, author: 'Vikram Joshi', readTime: '5 min', body: `<p>In a landmark legislative development, the Lok Sabha on Thursday passed the Constitution (One Hundred and Twenty-Ninth Amendment) Bill, enabling the holding of simultaneous elections to the Lok Sabha and all State Legislative Assemblies. The bill passed with 360 votes in favour and 165 against, crossing the required two-thirds majority threshold.</p><h3>What Does This Mean?</h3><p>The One Nation, One Election (ONOE) concept envisions synchronising the electoral cycles of the Lok Sabha and all state assemblies, so that elections are held simultaneously every five years. Proponents argue this will save thousands of crores in election expenditure, reduce administrative disruption, and allow governments to focus on governance rather than perpetual election mode.</p><p>Critics, including the opposition INDIA bloc, have raised concerns about federalism, arguing that the bill undermines the autonomy of states and concentrates power at the centre. Several regional parties have announced they will challenge the bill in the Supreme Court.</p><h3>Next Steps</h3><p>The bill must now be ratified by at least half of the state legislatures before it becomes law. The government has set a target of completing the ratification process by December 2025 and holding the first simultaneous election in 2029.</p>` },
  { id: 4, cat: 'space', title: 'NASA Artemis III: Astronauts to Land Near Lunar South Pole in 2026', excerpt: 'NASA\'s updated mission plan places Artemis III on track for a 2026 crewed lunar landing, with a female astronaut set to walk on the Moon\'s south pole for the first time.', date: '2025-05-02', img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600&h=400&fit=crop', views: 38900, author: 'Emily Rogers', readTime: '4 min', body: `<p>NASA has confirmed that the Artemis III mission, which will return humans to the Moon for the first time since Apollo 17 in 1972, is now targeting a late 2026 launch window following completion of critical hardware tests. The mission will see a crew of four astronauts — including at least one woman — travel to the lunar orbit aboard the Orion spacecraft.</p><h3>Mission Profile</h3><p>Two crew members will transfer to the SpaceX Starship Human Landing System (HLS) and descend to the lunar surface near Shackleton Crater at the Moon's south pole. This region is scientifically significant because permanently shadowed craters there are believed to contain billions of tonnes of water ice, which could be a critical resource for future lunar bases and deep space missions.</p><p>The astronauts will conduct two Extra-Vehicular Activities (EVAs or moonwalks) during their approximately six-day surface stay, collecting rock samples and deploying scientific instruments. Indian-American astronaut Raja Chari is among the candidates for the mission crew.</p>` },
  { id: 5, cat: 'current', title: 'RBI Cuts Repo Rate by 25 bps to 6.25%; Home Loans to Get Cheaper', excerpt: 'The Reserve Bank of India\'s Monetary Policy Committee voted unanimously to cut the key lending rate, providing relief to millions of home loan borrowers.', date: '2025-05-02', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop', views: 42800, author: 'Anita Desai', readTime: '3 min', body: `<p>The Reserve Bank of India's six-member Monetary Policy Committee (MPC), in its bi-monthly policy review, cut the benchmark repo rate by 25 basis points to 6.25% — the first rate cut in nearly four years. The decision was unanimous and came on the back of easing inflation and moderating global uncertainty.</p><h3>Impact on Borrowers</h3><p>The rate cut is expected to translate into lower Equated Monthly Instalments (EMIs) for borrowers with floating-rate home loans, vehicle loans, and personal loans. For a ₹50 lakh home loan at 8.75% over 20 years, the EMI reduction is expected to be approximately ₹850–₹900 per month, analysts at SBI Research estimated.</p><p>The MPC also retained its GDP growth projection for FY26 at 6.7%, while lowering the retail inflation forecast to 4.2% from the earlier 4.5%, citing improved Kharif production and softening global commodity prices. RBI Governor Sanjay Malhotra described the rate cut as a "calibrated and forward-looking" decision to support growth without compromising financial stability.</p>` },
  { id: 6, cat: 'education', title: 'UPSC Civil Services 2024 Results: 1,016 Candidates Selected; Shakti Dubey Tops', excerpt: 'The UPSC has announced the final results of the Civil Services Examination 2024. Shakti Dubey from Uttar Pradesh has secured the All India Rank 1.', date: '2025-05-01', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop', views: 89500, author: 'Ramesh Kumar', readTime: '4 min', body: `<p>The Union Public Service Commission (UPSC) has declared the final results of the Civil Services Examination 2024, with a total of 1,016 candidates selected for appointment to the Indian Administrative Service, Indian Foreign Service, Indian Police Service, and other Group A and Group B Central Services.</p><h3>Top Rankers</h3><p>Shakti Dubey from Varanasi, Uttar Pradesh has secured the coveted All India Rank (AIR) 1. She holds a B.Tech degree from IIT Kanpur and was appearing for the examination for the first time. AIR 2 went to Aditya Srivastava from Rajasthan, and AIR 3 to Animesh Pradhan from Odisha.</p><p>Of the 1,016 selected candidates, 664 are male (65.4%) and 352 are female (34.6%). This year's results saw the highest-ever representation from Economically Weaker Section (EWS) and Other Backward Class (OBC) categories following the implementation of the 27% OBC reservation in Group A services. The successful candidates will now undergo a medical examination and document verification before being assigned to their respective services and cadres.</p>` },
  { id: 7, cat: 'technology', title: 'Reliance Jio Launches 6G Trials in Mumbai and Delhi with 10 Gbps Speed', excerpt: 'Jio\'s trial network demonstrated speeds of up to 10 Gbps in controlled environments, marking India\'s first successful 6G demonstration.', date: '2025-04-30', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', views: 29700, author: 'Kavita Menon', readTime: '3 min', body: `<p>Reliance Jio has successfully conducted India's first 6G technology trials in Mumbai's Bandra-Kurla Complex and Delhi's Aerocity, achieving data transfer speeds of up to 10 gigabits per second (Gbps) — approximately 100 times faster than current 5G speeds. The milestone places India among a handful of countries globally to have demonstrated functional 6G technology.</p><p>The trial used a combination of sub-terahertz (sub-THz) spectrum bands and advanced beamforming technology developed by Jio's in-house research team in collaboration with Samsung Networks. The latency achieved was below 0.1 milliseconds, enabling applications like real-time holographic communication and tactile internet.</p><p>Jio has announced it will invest ₹75,000 crore in 6G infrastructure by 2030 and is working with the Department of Telecommunications (DoT) on spectrum allocation for commercial 6G services targeted to launch in 2028–2029.</p>` },
  { id: 8, cat: 'scheme', title: 'Ayushman Bharat Expanded: Now Covers All Citizens Above 70 Years', excerpt: 'In a major expansion of India\'s flagship health insurance scheme, PM-JAY will now cover 4.5 crore senior citizens above 70 with ₹5 lakh annual health cover.', date: '2025-04-29', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop', views: 35400, author: 'Dr. Sunita Rao', readTime: '4 min', body: `<p>In a landmark expansion of the Pradhan Mantri Jan Arogya Yojana (PM-JAY), the Union Health Ministry has announced that all Indian citizens aged 70 years and above will now be eligible for health coverage of up to ₹5 lakh per year under the Ayushman Bharat scheme, regardless of income or socioeconomic status.</p><p>The expansion, which will benefit approximately 4.5 crore senior citizens and their families covering an estimated 6 crore individuals, is one of the largest extensions of a government healthcare programme in India's history. Previously, the scheme was restricted to families identified as poor and vulnerable through the Socio-Economic Caste Census.</p><p>Under the expanded scheme, senior citizens will receive coverage at over 29,000 empanelled hospitals across the country, including private hospitals. The government has allocated an additional ₹3,500 crore for the current financial year to fund the expansion.</p>` },
  { id: 9, cat: 'current', title: 'India\'s GDP Growth at 7.2% in FY25; Fastest-Growing Major Economy', excerpt: 'National Statistics Office data confirms India\'s economy grew 7.2% in FY2024-25, making it the world\'s fastest-growing major economy for the third consecutive year.', date: '2025-04-28', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop', views: 44100, author: 'Suresh Mehta', readTime: '3 min', body: `<p>India's Gross Domestic Product (GDP) grew at 7.2% in fiscal year 2024-25 (April 2024 to March 2025), as per the first advance estimate released by the National Statistics Office (NSO). This makes India the fastest-growing major economy in the world for the third year running, ahead of China's 4.8% and the global average of 3.2%.</p><p>The growth was driven by robust capital expenditure by the central government (up 28% year-on-year), a strong services sector (growing at 8.9%), and a resilient manufacturing sector boosted by the Production Linked Incentive (PLI) schemes. Agriculture grew at 3.1% despite an uneven monsoon in some regions.</p><p>Finance Minister Nirmala Sitharaman expressed confidence that India is on track to become a $5 trillion economy by 2027, two years ahead of the original target. "India's fundamentals are strong, our demographics are favourable, and our reforms are yielding results," she said at a CII industry summit in New Delhi.</p>` },
  { id: 10, cat: 'political', title: 'India-Pakistan Ceasefire Extended; Back-Channel Diplomacy Bearing Fruit', excerpt: 'The two-month ceasefire along the Line of Control has been extended for another 90 days as diplomatic efforts continue at both the foreign ministry and military levels.', date: '2025-04-27', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop', views: 57800, author: 'Arjun Kapoor', readTime: '4 min', body: `<p>India and Pakistan have extended the ceasefire along the Line of Control (LoC) in Jammu & Kashmir for an additional 90 days, as confirmed by the Directors General of Military Operations (DGMOs) of both nations in a hotline conversation on Sunday. The original ceasefire, announced in February 2025, has held with minor violations and is considered the longest sustained period of relative calm on the LoC in over a decade.</p><p>Foreign Ministry sources in New Delhi indicated that back-channel diplomatic conversations between the two governments have made "meaningful but cautious progress" on several issues, including the resumption of trade through the Wagah-Attari crossing and the release of fishermen detained in each other's waters. A formal resumption of composite dialogue, suspended in 2019, remains under discussion.</p>` },
  { id: 11, cat: 'education', title: 'IIT JEE Advanced 2025 Results Out; Vedant Raichandani Tops with 335/360', excerpt: 'Over 1.8 lakh students appeared for JEE Advanced 2025; Vedant Raichandani from Mumbai secured the top rank with an exceptional score.', date: '2025-04-26', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop', views: 78200, author: 'Neha Singh', readTime: '3 min', body: `<p>The Joint Entrance Examination (JEE) Advanced 2025 results have been declared by IIT Bombay, which organised the exam this year. Vedant Raichandani, an 18-year-old student from Mumbai, has secured All India Rank 1 with a score of 335 out of 360 marks, achieving a near-perfect score in the most competitive engineering entrance examination in the country.</p><p>A total of 48,248 candidates have qualified for admission to the 23 IITs across India offering a total of 17,385 seats. This year, 18.9% of qualifiers are female — the highest proportion in JEE Advanced history, reflecting the growing participation of women in STEM education. The top female ranker is Tanvi Sharma from Jaipur, who secured All India Rank 7.</p>` },
];

const BOOKS = [
  { id: 0, title: 'UPSC Civil Services General Studies Paper 1', author: 'M. Laxmikanth', price: 549, originalPrice: 899, cat: 'upsc', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=420&fit=crop', rating: 4.8, reviews: 12540, bestseller: true, edition: '7th Edition', pages: 844 },
  { id: 1, title: 'Indian Economy for Civil Services', author: 'Ramesh Singh', price: 475, originalPrice: 750, cat: 'upsc', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=420&fit=crop', rating: 4.7, reviews: 8920, bestseller: true, edition: '15th Edition', pages: 792 },
  { id: 2, title: 'SSC CGL Complete Guide 2025', author: 'Arihant Experts', price: 399, originalPrice: 599, cat: 'ssc', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=420&fit=crop', rating: 4.6, reviews: 15200, isNew: true, edition: '2025 Edition', pages: 1200 },
  { id: 3, title: 'IBPS PO Quantitative Aptitude', author: 'R.S. Aggarwal', price: 325, originalPrice: 499, cat: 'banking', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=420&fit=crop', rating: 4.9, reviews: 22100, bestseller: true, edition: 'Latest Edition', pages: 960 },
  { id: 4, title: 'Railway NTPC General Awareness', author: 'Kiran Prakashan', price: 285, originalPrice: 450, cat: 'railway', img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=420&fit=crop', rating: 4.5, reviews: 9800, edition: '2025 Edition', pages: 680 },
  { id: 5, title: 'NDA Mathematics Complete', author: 'RS Aggarwal', price: 425, originalPrice: 650, cat: 'defence', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=420&fit=crop', rating: 4.7, reviews: 6500, isNew: true, edition: '2024 Edition', pages: 752 },
  { id: 6, title: 'Modern History of India — Bipin Chandra', author: 'Bipin Chandra', price: 380, originalPrice: 580, cat: 'upsc', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=420&fit=crop', rating: 4.9, reviews: 18700, bestseller: true, edition: 'Revised Edition', pages: 632 },
  { id: 7, title: 'State PSC Prelims & Mains Guide', author: 'Drishti IAS', price: 520, originalPrice: 850, cat: 'state', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=420&fit=crop', rating: 4.6, reviews: 4200, edition: '2025 Edition', pages: 1050 },
  { id: 8, title: 'English Grammar & Comprehension for Competitive Exams', author: 'Wren & Martin', price: 299, originalPrice: 450, cat: 'ssc', img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=300&h=420&fit=crop', rating: 4.8, reviews: 31500, bestseller: true, edition: 'New Edition', pages: 512 },
  { id: 9, title: 'Banking Awareness 2025', author: 'Oliveboard', price: 350, originalPrice: 525, cat: 'banking', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=420&fit=crop', rating: 4.5, reviews: 7600, isNew: true, edition: '2025 Edition', pages: 448 },
  { id: 10, title: 'Geography of India & World — Majid Husain', author: 'Majid Husain', price: 430, originalPrice: 695, cat: 'upsc', img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=420&fit=crop', rating: 4.7, reviews: 13400, edition: '11th Edition', pages: 788 },
  { id: 11, title: 'CDS Combined Defence Services Guide', author: 'Arihant Experts', price: 465, originalPrice: 750, cat: 'defence', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=420&fit=crop', rating: 4.6, reviews: 5800, edition: '2025 Edition', pages: 896 },
];

const PLANS = [
  { name: 'Basic', icon: '📰', desc: 'Perfect for casual readers', monthlyPrice: 99, yearlyPrice: 699, color: '#2563eb', features: [{ text: '100 articles/month', ok: true }, { text: 'Breaking news alerts', ok: true }, { text: 'Daily current affairs', ok: true }, { text: 'PDF download', ok: false }, { text: 'Ad-free experience', ok: false }, { text: 'Exam book discounts', ok: false }] },
  { name: 'Standard', icon: '⭐', desc: 'Best for serious aspirants', monthlyPrice: 199, yearlyPrice: 1499, color: '#c0392b', popular: true, features: [{ text: 'Unlimited articles', ok: true }, { text: 'Breaking news alerts', ok: true }, { text: 'Daily current affairs + PDF', ok: true }, { text: 'Ad-free experience', ok: true }, { text: '10% book discount', ok: true }, { text: 'Mock test resources', ok: false }] },
  { name: 'Premium', icon: '👑', desc: 'Complete exam preparation suite', monthlyPrice: 349, yearlyPrice: 2499, color: '#e67e22', features: [{ text: 'Unlimited articles', ok: true }, { text: 'Priority breaking news', ok: true }, { text: 'Full current affairs archive', ok: true }, { text: 'Ad-free + offline mode', ok: true }, { text: '25% book discount', ok: true }, { text: 'Mock tests + study material', ok: true }] },
];

const TESTIMONIALS = [
  { text: 'NewsVault\'s daily current affairs helped me clear UPSC Prelims 2024 on my first attempt. The curated content saves so much time!', name: 'Arjun Mishra', exam: 'IAS 2024 — AIR 47', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&face' },
  { text: 'The ISRO and science news section is unmatched. I scored full marks in science in SSC CGL just by following NewsVault regularly.', name: 'Priya Sharma', exam: 'SSC CGL — Rank 182', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&face' },
  { text: 'Best investment I made for my bank exam prep. The book store has everything at great prices and fast delivery.', name: 'Rohit Gupta', exam: 'IBPS PO 2024', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&face' },
  { text: 'I love the date-wise current affairs filter. It made revision for RAS prelims so easy. Highly recommend the Standard plan!', name: 'Kavita Jain', exam: 'RAS 2024 — Rank 23', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&face' },
  { text: 'The political and government scheme news is very comprehensive and helpful for GS Paper 2. Thank you NewsVault!', name: 'Abhishek Tiwari', exam: 'IPS 2024 — AIR 89', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&face' },
  { text: 'Subscribed during COVID lockdown and never looked back. The team covers everything an aspirant needs — concise and accurate.', name: 'Deepa Iyer', exam: 'Kerala PSC Rank 12', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&face' },
];

const TEAM = [
  { name: 'Rajiv Mehta', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&face' },
  { name: 'Dr. Sunita Kapoor', role: 'Chief Content Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&face' },
  { name: 'Aditya Kumar', role: 'Head of Technology', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&face' },
  { name: 'Priya Nair', role: 'Books Curator', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&face' },
];

const BENEFITS = [
  { icon: '📰', title: 'Unlimited Articles', desc: 'Access the full archive of 10,000+ articles across all categories without any limits.' },
  { icon: '📅', title: 'Daily Current Affairs', desc: 'Receive a curated daily digest of important news every morning at 7 AM.' },
  { icon: '📄', title: 'PDF Downloads', desc: 'Download weekly and monthly current affairs PDFs for offline revision.' },
  { icon: '🚫', title: 'Ad-Free Reading', desc: 'Enjoy a clean, distraction-free reading experience without any advertisements.' },
  { icon: '📚', title: 'Book Discounts', desc: 'Get exclusive discounts of up to 25% on all competitive exam books.' },
  { icon: '🔔', title: 'Instant Alerts', desc: 'Get push notifications for breaking news important for your exam preparation.' },
];

const FAQS = [
  { q: 'Can I cancel my subscription anytime?', a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of the current billing period.' },
  { q: 'Is there a free trial available?', a: 'Yes! We offer a 7-day free trial for first-time subscribers on Standard and Premium plans. No credit card required.' },
  { q: 'How are the books delivered?', a: 'Books are delivered to your doorstep within 3–5 business days across India. Express delivery (1–2 days) is available in metro cities.' },
  { q: 'What payment methods are accepted?', a: 'We accept all major credit/debit cards, UPI, Net Banking, and popular wallets like Paytm, PhonePe, and Google Pay.' },
  { q: 'Can I share my subscription with others?', a: 'Subscriptions are for individual use only. However, we offer Family Plans and Team Plans at discounted rates — please contact us.' },
  { q: 'Are the current affairs useful for all exams?', a: 'Absolutely! Our content is curated specifically keeping UPSC, SSC, Banking, Railway, and State PSC examinations in mind.' },
];

// =========== STATE ===========
let cart = [];
let currentPage = 'home';
let previousPage = 'home';
let heroIndex = 0;
let heroTimer;
let filteredArticles = [...ARTICLES];
let filteredBooks = [...BOOKS];
let articleOffset = 0;
let newsCat = 'all';
let bookCat = 'all';
let yearlyBilling = false;
let currentArticleId = null;
let currentBookId = null;

// =========== INIT ===========
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    setTimeout(() => {
      document.getElementById('notif').classList.add('show');
      setTimeout(() => closeNotif(), 7000);
    }, 800);
  }, 1800);

  renderHomeSections();
  startHeroTimer();
  setupScrollBehaviors();
  setupTickerDuplicate();

  document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
});

// =========== NAVIGATION ===========
function navigateTo(page) {
  if (page === currentPage && !['articleDetail','bookDetail'].includes(page)) return;
  previousPage = currentPage;
  currentPage = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(page);
  if (target) { target.classList.add('active'); window.scrollTo(0,0); }

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('onclick')?.includes(`'${page}'`));
  });

  if (page === 'news') renderNewsPage();
  if (page === 'books') renderBooksPage();
  if (page === 'subscription') renderSubscriptionPage();
  if (page === 'about') renderAboutPage();
  if (page === 'contact') {}

  closeMobileMenu();
}

function goBack() { navigateTo(previousPage || 'home'); }

// =========== HERO SLIDER ===========
function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => slideHero(1), 5500);
}

function slideHero(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  slides[heroIndex].classList.remove('active');
  dots[heroIndex].classList.remove('active');
  heroIndex = (heroIndex + dir + slides.length) % slides.length;
  slides[heroIndex].classList.add('active');
  dots[heroIndex].classList.add('active');
  startHeroTimer();
}

function goSlide(i) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  slides[heroIndex].classList.remove('active');
  dots[heroIndex].classList.remove('active');
  heroIndex = i;
  slides[heroIndex].classList.add('active');
  dots[heroIndex].classList.add('active');
  startHeroTimer();
}

// =========== TICKER ===========
function setupTickerDuplicate() {
  const t = document.getElementById('tickerTrack');
  if (t) t.innerHTML += t.innerHTML;
}

// =========== RENDER HOME ===========
function renderHomeSections() {
  renderLatestNews();
  renderCatStrips();
  renderCurrentAffairs();
  renderHomeBooks();
  renderSubTeaser();
  renderTestimonials();
}

function renderLatestNews() {
  const g = document.getElementById('latestNewsGrid');
  if (!g) return;
  g.innerHTML = ARTICLES.slice(0,6).map(a => newsCardHTML(a)).join('');
}

function newsCardHTML(a) {
  return `<div class="news-card reveal" onclick="openArticle(${a.id})">
    <div class="news-card-img">
      <img src="${a.img}" alt="${a.title}" loading="lazy" />
      <span class="news-cat-tag ${a.cat}">${catLabel(a.cat)}</span>
    </div>
    <div class="news-card-body">
      <div class="news-card-title">${a.title}</div>
      <div class="news-card-excerpt">${a.excerpt}</div>
      <div class="news-card-footer">
        <span><i class="fas fa-calendar-alt"></i> ${formatDate(a.date)} &nbsp;·&nbsp; <i class="fas fa-eye"></i> ${fmtNum(a.views)}</span>
        <div class="share-icons">
          <a href="#" onclick="event.stopPropagation()"><i class="fab fa-facebook-f"></i></a>
          <a href="#" onclick="event.stopPropagation()"><i class="fab fa-twitter"></i></a>
          <a href="#" onclick="event.stopPropagation()"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>`;
}

function renderCatStrips() {
  const spaceArts = ARTICLES.filter(a => a.cat === 'space').slice(0,3);
  const polArts = ARTICLES.filter(a => a.cat === 'political').slice(0,3);
  const techArts = ARTICLES.filter(a => a.cat === 'technology').slice(0,3);
  document.getElementById('isroStrip').innerHTML = spaceArts.map(a => stripItemHTML(a)).join('') || polArts.map(a => stripItemHTML(a)).join('');
  document.getElementById('polStrip').innerHTML = (polArts.length ? polArts : ARTICLES.slice(3,6)).map(a => stripItemHTML(a)).join('');
  document.getElementById('techStrip').innerHTML = (techArts.length ? techArts : ARTICLES.slice(0,3)).map(a => stripItemHTML(a)).join('');
}

function stripItemHTML(a) {
  return `<div class="cat-strip-item" onclick="openArticle(${a.id})">
    <div class="cat-strip-item-img"><img src="${a.img}" alt="" loading="lazy"/></div>
    <div><div class="cat-strip-item-title">${a.title}</div><div class="cat-strip-item-date"><i class="fas fa-clock"></i> ${formatDate(a.date)}</div></div>
  </div>`;
}

function renderCurrentAffairs() {
  const g = document.getElementById('currentAffairsGrid');
  if (!g) return;
  g.innerHTML = ARTICLES.slice(0,8).map(a => `
    <div class="ca-card reveal" onclick="openArticle(${a.id})">
      <div class="ca-card-date"><i class="fas fa-calendar-alt"></i> ${formatDate(a.date)}</div>
      <div class="ca-card-title">${a.title}</div>
      <span class="ca-card-tag">${catLabel(a.cat)}</span>
    </div>`).join('');
}

function renderHomeBooks() {
  const g = document.getElementById('homeBooksGrid');
  if (!g) return;
  g.innerHTML = BOOKS.slice(0,4).map(b => bookCardHTML(b)).join('');
}

function renderSubTeaser() {
  const g = document.getElementById('subPlansPreview');
  if (!g) return;
  g.innerHTML = PLANS.map(p => `
    <div class="plan-mini ${p.popular?'featured':''}" onclick="navigateTo('subscription')">
      <div><div class="plan-mini-name">${p.icon} ${p.name}</div><div class="plan-mini-desc">${p.desc}</div></div>
      <div class="plan-mini-price">₹${p.monthlyPrice}<span>/mo</span></div>
    </div>`).join('');
}

function renderTestimonials() {
  const g = document.getElementById('testimonialsGrid');
  if (!g) return;
  g.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card reveal">
      <div class="test-quote">"</div>
      <p class="test-text">${t.text}</p>
      <div class="test-user">
        <div class="test-avatar"><img src="${t.img}" alt="${t.name}" loading="lazy"/></div>
        <div><div class="test-name">${t.name}</div><div class="test-exam">${t.exam}</div></div>
      </div>
    </div>`).join('');
}

// =========== NEWS PAGE ===========
function renderNewsPage() {
  filterArticles();
  renderTrendingSidebar();
}

function filterArticles() {
  const search = (document.getElementById('newsSearch')?.value || '').toLowerCase();
  const date = document.getElementById('newsDateFilter')?.value || '';
  const sort = document.getElementById('sortSelect')?.value || 'newest';

  filteredArticles = ARTICLES.filter(a => {
    const matchCat = newsCat === 'all' || a.cat === newsCat;
    const matchSearch = !search || a.title.toLowerCase().includes(search) || a.excerpt.toLowerCase().includes(search);
    const matchDate = !date || a.date === date;
    return matchCat && matchSearch && matchDate;
  });

  if (sort === 'oldest') filteredArticles.sort((a,b) => a.date.localeCompare(b.date));
  else if (sort === 'popular') filteredArticles.sort((a,b) => b.views - a.views);
  else filteredArticles.sort((a,b) => b.date.localeCompare(a.date));

  articleOffset = 6;
  const g = document.getElementById('articlesGrid');
  if (!g) return;
  const shown = filteredArticles.slice(0, articleOffset);
  g.innerHTML = shown.length ? shown.map(a => newsCardHTML(a)).join('') : '<p style="color:var(--text-light);grid-column:1/-1;text-align:center;padding:2rem">No articles found.</p>';
  const rc = document.getElementById('resultsCount');
  if (rc) rc.textContent = `Showing ${shown.length} of ${filteredArticles.length} articles`;
  setupReveal();
}

function loadMoreArticles() {
  const more = filteredArticles.slice(articleOffset, articleOffset + 6);
  articleOffset += 6;
  const g = document.getElementById('articlesGrid');
  if (g) g.innerHTML += more.map(a => newsCardHTML(a)).join('');
  if (articleOffset >= filteredArticles.length) {
    const btn = document.getElementById('loadMoreBtn');
    if (btn) btn.style.display = 'none';
  }
  setupReveal();
}

function setNewsCat(el, cat) {
  newsCat = cat;
  document.querySelectorAll('#catFilters .cat-filter').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  filterArticles();
}

function filterNews(cat) { navigateTo('news'); setTimeout(() => { newsCat = cat; filterArticles(); }, 200); }

function filterByDate(date) {
  const g = document.getElementById('currentAffairsGrid');
  if (!g) return;
  const filtered = date ? ARTICLES.filter(a => a.date === date) : ARTICLES.slice(0,8);
  g.innerHTML = filtered.length
    ? filtered.map(a => `<div class="ca-card reveal" onclick="openArticle(${a.id})"><div class="ca-card-date"><i class="fas fa-calendar-alt"></i> ${formatDate(a.date)}</div><div class="ca-card-title">${a.title}</div><span class="ca-card-tag">${catLabel(a.cat)}</span></div>`).join('')
    : '<p style="color:var(--text-light);grid-column:1/-1;text-align:center;padding:2rem">No articles for selected date.</p>';
  setupReveal();
}

function renderTrendingSidebar() {
  const g = document.getElementById('trendingSidebar');
  if (!g) return;
  const top5 = [...ARTICLES].sort((a,b) => b.views - a.views).slice(0,5);
  g.innerHTML = top5.map((a,i) => `
    <div class="trending-item" onclick="openArticle(${a.id})">
      <div class="trending-num">0${i+1}</div>
      <div class="trending-title">${a.title}</div>
    </div>`).join('');
}

// =========== ARTICLE DETAIL ===========
function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;
  currentArticleId = id;
  previousPage = currentPage;

  const af = document.getElementById('articleFull');
  if (af) af.innerHTML = `
    <div class="article-full-img"><img src="${a.img}" alt="${a.title}"/></div>
    <div class="article-full-cat"><span class="news-cat-tag ${a.cat}">${catLabel(a.cat)}</span></div>
    <h1 class="article-full-title">${a.title}</h1>
    <div class="article-full-meta">
      <span><i class="fas fa-user"></i> ${a.author}</span>
      <span><i class="fas fa-calendar-alt"></i> ${formatDate(a.date)}</span>
      <span><i class="fas fa-clock"></i> ${a.readTime} read</span>
      <span><i class="fas fa-eye"></i> ${fmtNum(a.views)} views</span>
    </div>
    <div class="article-body">${a.body}</div>
    <div class="article-share">
      <span>Share:</span>
      <button class="share-btn share-fb"><i class="fab fa-facebook-f"></i> Facebook</button>
      <button class="share-btn share-tw"><i class="fab fa-twitter"></i> Twitter</button>
      <button class="share-btn share-wa"><i class="fab fa-whatsapp"></i> WhatsApp</button>
    </div>`;

  const related = ARTICLES.filter(x => x.id !== id && x.cat === a.cat).slice(0,4);
  const rg = document.getElementById('relatedArticles');
  if (rg) rg.innerHTML = related.map(r => `
    <div class="related-item" onclick="openArticle(${r.id})">
      <img src="${r.img}" alt="" loading="lazy"/>
      <div class="related-title">${r.title}</div>
    </div>`).join('');

  navigateTo('articleDetail');
}

// =========== BOOKS PAGE ===========
function renderBooksPage() {
  renderBestsellers();
  filterBooks();
}

function renderBestsellers() {
  const g = document.getElementById('bsBooksRow');
  if (!g) return;
  const bs = BOOKS.filter(b => b.bestseller).slice(0,6);
  g.innerHTML = bs.map(b => `
    <div class="bs-book-item" onclick="openBook(${b.id})">
      <img src="${b.img}" alt="${b.title}" loading="lazy"/>
      <span>${b.title.substring(0,40)}...</span>
    </div>`).join('');
}

function filterBooks() {
  const search = (document.getElementById('bookSearch')?.value || '').toLowerCase();
  const sort = document.getElementById('bookSort')?.value || 'popular';

  filteredBooks = BOOKS.filter(b => {
    const matchCat = bookCat === 'all' || b.cat === bookCat;
    const matchSearch = !search || b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (sort === 'price-low') filteredBooks.sort((a,b) => a.price - b.price);
  else if (sort === 'price-high') filteredBooks.sort((a,b) => b.price - a.price);
  else if (sort === 'newest') filteredBooks.sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0));
  else filteredBooks.sort((a,b) => b.reviews - a.reviews);

  const g = document.getElementById('booksGridFull');
  const bc = document.getElementById('booksCount');
  if (bc) bc.textContent = `Showing ${filteredBooks.length} books`;
  if (g) g.innerHTML = filteredBooks.length
    ? filteredBooks.map(b => bookCardHTML(b)).join('')
    : '<p style="color:var(--text-light);text-align:center;padding:2rem;grid-column:1/-1">No books found.</p>';
  setupReveal();
}

function setBookCat(el, cat) {
  bookCat = cat;
  document.querySelectorAll('#bookCats .cat-filter').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  filterBooks();
}

function bookCardHTML(b) {
  const badgeHTML = b.bestseller
    ? '<span class="book-badge badge-bestseller">Bestseller</span>'
    : b.isNew ? '<span class="book-badge badge-new">New</span>'
    : `<span class="book-badge badge-discount">${Math.round((1-b.price/b.originalPrice)*100)}% OFF</span>`;
  return `<div class="book-card reveal" onclick="openBook(${b.id})">
    <div class="book-card-img">
      <img src="${b.img}" alt="${b.title}" loading="lazy"/>
      ${badgeHTML}
    </div>
    <div class="book-card-body">
      <div class="book-title">${b.title}</div>
      <div class="book-author">by ${b.author}</div>
      <div class="book-rating">
        <div class="stars">${starHTML(b.rating)}</div>
        <span class="rating-count">(${fmtNum(b.reviews)})</span>
      </div>
      <div class="book-price-row">
        <span class="book-price">₹${b.price}</span>
        <span class="book-original-price">₹${b.originalPrice}</span>
      </div>
      <div class="book-card-actions">
        <button class="btn-cart" onclick="event.stopPropagation();addToCart(${b.id})"><i class="fas fa-cart-plus"></i> Cart</button>
        <button class="btn-buy" onclick="event.stopPropagation();buyNow(${b.id})">Buy Now</button>
      </div>
    </div>
  </div>`;
}

function openBook(id) {
  const b = BOOKS.find(x => x.id === id);
  if (!b) return;
  currentBookId = id;
  previousPage = currentPage;

  const discount = Math.round((1-b.price/b.originalPrice)*100);
  const dc = document.getElementById('bookDetailContent');
  if (dc) dc.innerHTML = `
    <div class="book-detail-grid">
      <div class="book-detail-img-wrap">
        <div class="book-detail-img"><img src="${b.img}" alt="${b.title}"/></div>
        <div class="book-detail-actions">
          <button class="btn-primary large full" onclick="addToCart(${b.id});showToast('Added to cart!')"><i class="fas fa-cart-plus"></i> Add to Cart</button>
          <button class="btn-outline large full" onclick="buyNow(${b.id})"><i class="fas fa-bolt"></i> Buy Now — ₹${b.price}</button>
        </div>
      </div>
      <div class="book-detail-content">
        <div class="book-detail-cat"><span class="news-cat-tag">${b.cat.toUpperCase()}</span></div>
        <h1 class="book-detail-title">${b.title}</h1>
        <p class="book-detail-author">by <strong>${b.author}</strong></p>
        <div class="book-rating" style="margin-bottom:1rem">
          <div class="stars">${starHTML(b.rating)}</div>
          <span style="font-size:.9rem;color:var(--text-light)">${b.rating}/5 (${fmtNum(b.reviews)} ratings)</span>
        </div>
        <div class="book-detail-price-row">
          <span class="book-detail-price">₹${b.price}</span>
          <span class="book-detail-orig">₹${b.originalPrice}</span>
          <span class="book-detail-save">You Save ${discount}%</span>
        </div>
        <p class="book-detail-desc">This comprehensive guide is tailored specifically for competitive exam aspirants. Covering all essential topics with clear explanations, practice questions, and previous year solutions, it is one of the most recommended resources by successful candidates and coaching institutes across India.</p>
        <div class="book-specs">
          <div class="book-spec-item"><div class="spec-label">Edition</div><div class="spec-value">${b.edition}</div></div>
          <div class="book-spec-item"><div class="spec-label">Pages</div><div class="spec-value">${b.pages}</div></div>
          <div class="book-spec-item"><div class="spec-label">Language</div><div class="spec-value">English + Hindi</div></div>
          <div class="book-spec-item"><div class="spec-label">Exam</div><div class="spec-value">${b.cat.toUpperCase()}</div></div>
          <div class="book-spec-item"><div class="spec-label">Format</div><div class="spec-value">Paperback</div></div>
          <div class="book-spec-item"><div class="spec-label">Delivery</div><div class="spec-value">3-5 Business Days</div></div>
        </div>
      </div>
    </div>`;

  navigateTo('bookDetail');
}

// =========== SUBSCRIPTION PAGE ===========
function renderSubscriptionPage() {
  renderPlans();
  renderBenefits();
  renderFAQs();
}

function renderPlans() {
  const g = document.getElementById('plansGrid');
  if (!g) return;
  g.innerHTML = PLANS.map(p => {
    const price = yearlyBilling ? p.yearlyPrice : p.monthlyPrice;
    const period = yearlyBilling ? '/year' : '/month';
    return `<div class="plan-card ${p.popular?'popular':''}" style="${p.popular?'border-color:'+p.color:''}">
      <div class="plan-icon">${p.icon}</div>
      <div class="plan-name" style="color:${p.color}">${p.name}</div>
      <div class="plan-desc">${p.desc}</div>
      <div class="plan-price"><span class="plan-amount">₹${price}</span><span class="plan-period">${period}</span></div>
      <ul class="plan-features">
        ${p.features.map(f => `<li><i class="fas fa-${f.ok?'check':'times'}"></i> ${f.text}</li>`).join('')}
      </ul>
      <button class="btn-primary full" style="background:linear-gradient(135deg,${p.color},${darken(p.color)})" onclick="subscribePlan('${p.name}',${price})">
        Get ${p.name} Plan <i class="fas fa-arrow-right"></i>
      </button>
    </div>`;
  }).join('');
}

function toggleBilling() {
  yearlyBilling = document.getElementById('billingToggle').checked;
  renderPlans();
}

function renderBenefits() {
  const g = document.getElementById('benefitsGrid');
  if (!g) return;
  g.innerHTML = BENEFITS.map(b => `
    <div class="benefit-item reveal">
      <div class="benefit-icon">${b.icon}</div>
      <div class="benefit-title">${b.title}</div>
      <p class="benefit-desc">${b.desc}</p>
    </div>`).join('');
  setupReveal();
}

function renderFAQs() {
  const g = document.getElementById('faqGrid');
  if (!g) return;
  g.innerHTML = FAQS.map((f,i) => `
    <div class="faq-item" id="faq${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">${f.q}<i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}

function toggleFAQ(i) {
  const item = document.getElementById('faq'+i);
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(x => x.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// =========== ABOUT PAGE ===========
function renderAboutPage() {
  const tg = document.getElementById('teamGrid');
  if (!tg) return;
  tg.innerHTML = TEAM.map(t => `
    <div class="team-card">
      <img src="${t.img}" alt="${t.name}" loading="lazy"/>
      <div class="team-card-body">
        <div class="team-name">${t.name}</div>
        <div class="team-role">${t.role}</div>
        <div class="team-socials">
          <a href="#" class="team-social"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="team-social"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>`).join('');
  setupReveal();
}

// =========== CART ===========
function addToCart(bookId) {
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;
  const existing = cart.find(c => c.id === bookId);
  if (existing) { showToast('Already in cart!'); return; }
  cart.push({ ...book });
  updateCartUI();
  showToast(`"${book.title.substring(0,30)}..." added to cart`);
}

function removeFromCart(bookId) {
  cart = cart.filter(c => c.id !== bookId);
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = cart.length;
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

document.getElementById('cartBtn').addEventListener('click', openCart);

function renderCartItems() {
  const ci = document.getElementById('cartItems');
  const cf = document.getElementById('cartFooter');
  const ct = document.getElementById('cartTotal');
  if (!ci) return;

  if (cart.length === 0) {
    ci.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>';
    if (cf) cf.style.display = 'none';
    return;
  }

  ci.innerHTML = cart.map(b => `
    <div class="cart-item">
      <img src="${b.img}" alt="${b.title}" />
      <div class="cart-item-info">
        <div class="cart-item-title">${b.title.substring(0,45)}...</div>
        <div class="cart-item-price">₹${b.price}</div>
        <div class="cart-item-remove" onclick="removeFromCart(${b.id})"><i class="fas fa-trash-alt"></i> Remove</div>
      </div>
    </div>`).join('');

  const total = cart.reduce((sum,b) => sum + b.price, 0);
  if (ct) ct.textContent = `₹${total}`;
  if (cf) cf.style.display = 'block';
}

function checkout() {
  closeCart();
  const total = cart.reduce((sum,b) => sum + b.price, 0);
  openPayModal(total, 'Cart Items');
}

function buyNow(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  if (!b) return;
  openPayModal(b.price, b.title.substring(0,40));
}

function subscribePlan(name, price) {
  openPayModal(price, `${name} Plan`);
}

// =========== PAYMENT MODAL ===========
function openPayModal(amount, item) {
  const modal = document.getElementById('payModal');
  const body = document.getElementById('payModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <p style="text-align:center;color:var(--text-light);margin-bottom:1rem">${item}</p>
    <div class="pay-amount">₹${amount}<small>Inclusive of all taxes</small></div>
    <div class="pay-methods">
      <div class="pay-method active" onclick="selectPayMethod(this)"><i class="fab fa-google-pay"></i>Google Pay</div>
      <div class="pay-method" onclick="selectPayMethod(this)"><i class="fas fa-mobile-alt"></i>PhonePe</div>
      <div class="pay-method" onclick="selectPayMethod(this)"><i class="fab fa-cc-visa"></i>Card</div>
      <div class="pay-method" onclick="selectPayMethod(this)"><i class="fas fa-university"></i>Net Banking</div>
    </div>
    <button class="btn-primary full large" onclick="processPayment()">Pay ₹${amount} Securely <i class="fas fa-lock"></i></button>
    <p style="text-align:center;font-size:.78rem;color:var(--gray);margin-top:.75rem"><i class="fas fa-shield-alt"></i> 256-bit SSL encrypted payment</p>`;

  modal.classList.add('open');
}

function closePayModal() { document.getElementById('payModal').classList.remove('open'); }

function selectPayMethod(el) {
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('active'));
  el.classList.add('active');
}

function processPayment() {
  closePayModal();
  cart = [];
  updateCartUI();
  showToast('✅ Payment successful! Order confirmed.', 4000);
}

// =========== SEARCH ===========
function globalSearchFn(val) {
  const sr = document.getElementById('searchResults');
  if (!val || val.length < 2) { if(sr) sr.innerHTML=''; return; }
  const results = [
    ...ARTICLES.filter(a => a.title.toLowerCase().includes(val.toLowerCase())).slice(0,4).map(a => ({type:'article',icon:'📰',text:a.title,id:a.id})),
    ...BOOKS.filter(b => b.title.toLowerCase().includes(val.toLowerCase())).slice(0,3).map(b => ({type:'book',icon:'📚',text:b.title,id:b.id})),
  ].slice(0,6);
  if (!sr) return;
  sr.innerHTML = results.length
    ? results.map(r => `<div class="search-result-item" onclick="openSearchResult('${r.type}',${r.id})"><i class="fas ${r.type==='article'?'fa-newspaper':'fa-book'}"></i> ${r.text.substring(0,70)}</div>`).join('')
    : '<div class="search-result-item"><i class="fas fa-info-circle"></i> No results found</div>';
}

function openSearchResult(type, id) {
  closeSearch();
  if (type === 'article') openArticle(id);
  else openBook(id);
}

document.getElementById('searchToggle').addEventListener('click', () => {
  const bar = document.getElementById('navSearchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) document.getElementById('globalSearch').focus();
});

function closeSearch() {
  document.getElementById('navSearchBar').classList.remove('open');
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

// =========== AUTH ===========
function switchAuth(tab) {
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('registerTab').classList.toggle('active', tab === 'register');
}

function validateLogin() {
  let ok = true;
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  document.getElementById('loginEmailErr').textContent = '';
  document.getElementById('loginPassErr').textContent = '';
  if (!email || !/\S+@\S+\.\S+/.test(email)) { document.getElementById('loginEmailErr').textContent = 'Enter a valid email'; ok = false; }
  if (!pass || pass.length < 6) { document.getElementById('loginPassErr').textContent = 'Password must be at least 6 characters'; ok = false; }
  if (ok) { showToast('✅ Login successful! Welcome back.'); navigateTo('home'); }
}

function validateRegister() {
  let ok = true;
  const first = document.getElementById('regFirst').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value;
  const terms = document.getElementById('regTerms').checked;
  ['regFirstErr','regEmailErr','regPhoneErr','regPassErr','regTermsErr'].forEach(id => { const e = document.getElementById(id); if(e) e.textContent = ''; });
  if (!first) { document.getElementById('regFirstErr').textContent = 'First name is required'; ok = false; }
  if (!email || !/\S+@\S+\.\S+/.test(email)) { document.getElementById('regEmailErr').textContent = 'Enter a valid email'; ok = false; }
  if (!phone || !/^\d{10}$/.test(phone)) { document.getElementById('regPhoneErr').textContent = 'Enter a valid 10-digit mobile'; ok = false; }
  if (!pass || pass.length < 8) { document.getElementById('regPassErr').textContent = 'Min 8 characters required'; ok = false; }
  if (!terms) { document.getElementById('regTermsErr').textContent = 'You must accept the terms'; ok = false; }
  if (ok) { showToast('🎉 Account created! Welcome to NewsVault.'); navigateTo('home'); }
}

function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.innerHTML = `<i class="fas fa-eye${input.type==='password'?'':'-slash'}"></i>`;
}

// =========== CONTACT FORM ===========
function submitContact() {
  let ok = true;
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg = document.getElementById('cMessage').value.trim();
  ['cNameErr','cEmailErr','cMsgErr'].forEach(id => { const e = document.getElementById(id); if(e) e.textContent = ''; });
  if (!name) { document.getElementById('cNameErr').textContent = 'Name is required'; ok = false; }
  if (!email || !/\S+@\S+\.\S+/.test(email)) { document.getElementById('cEmailErr').textContent = 'Valid email required'; ok = false; }
  if (!msg || msg.length < 20) { document.getElementById('cMsgErr').textContent = 'Message must be at least 20 characters'; ok = false; }
  if (ok) showToast('✅ Message sent! We\'ll reply within 24 hours.');
}

// =========== NEWSLETTER ===========
function subscribeNewsletter() {
  const email = document.getElementById('nlEmail')?.value.trim();
  if (!email || !/\S+@\S+\.\S+/.test(email)) { showToast('⚠️ Please enter a valid email.'); return; }
  showToast('✅ Subscribed! Check your inbox for confirmation.');
  if (document.getElementById('nlEmail')) document.getElementById('nlEmail').value = '';
}

// =========== DARK MODE ===========
document.getElementById('darkToggle').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('darkToggle').innerHTML = `<i class="fas fa-${isDark?'moon':'sun'}"></i>`;
});

// =========== MOBILE MENU ===========
function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// =========== SCROLL BEHAVIORS ===========
function setupScrollBehaviors() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollTop = document.getElementById('scrollTop');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);
    if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 500);
    setupReveal();
  });
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function setupReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
}

// =========== HELPERS ===========
function catLabel(cat) {
  const map = { space:'🚀 Space', political:'🏛️ Political', technology:'💻 Technology', scheme:'📋 Gov. Scheme', current:'📰 Current Affairs', education:'🎓 Education' };
  return map[cat] || cat;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
}

function fmtNum(n) {
  if (n >= 100000) return (n/100000).toFixed(1)+'L';
  if (n >= 1000) return (n/1000).toFixed(1)+'K';
  return n.toString();
}

function starHTML(r) {
  let s = '';
  for (let i=1;i<=5;i++) s += i<=Math.floor(r)?'★': (i-r<1?'☆':'☆');
  return s;
}

function darken(hex) {
  const amt = -40;
  let r = parseInt(hex.slice(1,3),16)+amt, g=parseInt(hex.slice(3,5),16)+amt, b=parseInt(hex.slice(5,7),16)+amt;
  return '#'+ [r,g,b].map(x=>Math.max(0,Math.min(255,x)).toString(16).padStart(2,'0')).join('');
}

function showToast(msg, duration=3000) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(80px);background:#1a3a8f;color:#fff;padding:.75rem 1.75rem;border-radius:99px;font-size:.9rem;font-weight:600;z-index:3000;transition:transform .4s;box-shadow:0 4px 20px rgba(0,0,0,.3);white-space:nowrap';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  setTimeout(() => toast.style.transform = 'translateX(-50%) translateY(0)', 10);
  setTimeout(() => toast.style.transform = 'translateX(-50%) translateY(80px)', duration);
}

function closeNotif() {
  document.getElementById('notif').classList.remove('show');
}

// =========== INIT REVEAL ===========
setTimeout(setupReveal, 500);