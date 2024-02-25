// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyBDsib-o2Ff42DUh3QhCJEdKUdY_06Czww";

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "hey! you are ProBot , a chatbot which recommends ocean friendly products .Utilize Google AI Bard to generate personalized explanations for why certain products are considered ocean-friendly(that dont cause ocean pollution)"}],
      },
      {
        role: "model",
        parts: [{ text: "1. **Ocean-Friendly Sunscreen:** \n   - Traditional sunscreens often contain chemicals that can harm coral reefs and marine life. Ocean-friendly sunscreens use ingredients like zinc oxide and titanium dioxide that are mineral-based and less harmful to the environment. \n   - Safe for coral reefs: Zinc oxide and titanium dioxide don't damage or bleach coral, making them reef-safe alternatives to traditional chemical sunscreens. \n\n\n2. **Reef-Safe Laundry Detergent:** \n   - Regular laundry detergents contain chemicals that can contribute to ocean pollution. Reef-safe laundry detergents use biodegradable ingredients that don't harm marine life or damage coral reefs. \n   - Phosphate-Free: Reef-safe laundry detergents don't contain phosphates, which can cause algae blooms that lead to coral reef degradation. \n\n\n3. **Biodegradable Beach Toys:** \n   - Plastic beach toys can end up in the ocean and harm marine life. Biodegradable beach toys are made from natural materials like bamboo, wood, or recycled plastic, which break down naturally in the environment, reducing plastic pollution. \n   - Safe for Marine Life: Biodegradable toys don't pose a threat to marine animals, as they don't contain harmful chemicals or materials that can be ingested or entangled.\n\n\n4. **Sustainable Seafood Choices:** \n   - Overfishing and certain fishing practices can harm marine ecosystems. Opting for sustainable seafood choices supports fisheries that use responsible practices and minimize their impact on marine life and habitats. \n   - Look for Eco-Labels: Choose seafood with eco-labels like the Marine Stewardship Council (MSC) or Aquaculture Stewardship Council (ASC) labels, which indicate sustainable fishing or farming practices. \n\n\n5. **Reusable Water Bottles and Containers:** \n   - Disposable plastic bottles and containers contribute to plastic pollution in oceans. Reusable alternatives, like stainless steel or glass water bottles and food containers, reduce waste and help keep oceans cleaner. \n   - Reduce Plastic Consumption: By using reusable items, you actively reduce the demand for single-use plastics, helping to curb the flow of plastic into oceans. \n\n\n6. **Ocean-Friendly Cleaning Products:** \n   - Conventional cleaning products can contain harsh chemicals that can harm marine life if they enter waterways. Ocean-friendly cleaning products use environmentally friendly ingredients that are less harmful to aquatic ecosystems. \n   - Biodegradable and Non-Toxic: Ocean-friendly cleaning products are often biodegradable and non-toxic, minimizing their impact on marine life and ecosystems."}],
      },
      {
        role: "user",
        parts: [{ text: "Sure, here's a short summary of the key factors for ocean-friendly products:Materials & Sourcing:Recycled, renewable, responsibly sourced materialsAvoid microplastics and harmful chemicalsManufacturing & Processing:Energy efficiency, minimal pollution & wasteNo harmful chemicals usedProduct Use & End-of-Life:Durable, reusable, and long-lastingBiodegradable or compostableClear end-of-life options (recycling, take-back programs)Additional Tips:Look for reliable certificationsChoose companies with ocean-friendly practicesValue transparency and traceability"}],
      },
      {
        role: "model",
        parts: [{ text: "Sure, here are some additional factors to consider when evaluating the ocean-friendliness of a product:\n\n**Certifications and Standards:** Look for reputable certifications and standards that indicate the product meets specific environmental criteria. Common certifications include:\n\n* **Marine Stewardship Council (MSC)** for sustainable seafood\n* **Forest Stewardship Council (FSC)** for sustainably sourced wood products\n* **Global Organic Textile Standard (GOTS)** for organic textiles\n* **OEKO-TEX Standard 100** for textiles free from harmful chemicals\n* **Energy Star** for energy-efficient appliances\n\n**Company Practices:** Research the company's overall environmental and social practices to ensure they align with ocean-friendly values. Consider factors such as:\n\n* The company's commitment to reducing its carbon footprint\n* Its efforts to minimize waste and pollution\n* Its involvement in ocean conservation initiatives\n* Its transparency and accountability in reporting its environmental performance\n\n**Transparency and Traceability:** The more transparent a company is about its products and supply chain, the easier it is to assess its ocean-friendly credentials. Look for companies that provide detailed information about the materials they use, their manufacturing processes, and their end-of-life options for their products.\n\nBy considering these additional factors, you can make more informed choices about the ocean-friendliness of the products you purchase and support companies that are actively working to protect our oceans."}],
      },
      {
        role: "user",
        parts: [{ text: "is bisleri water bottle ocean friendly ?"}],
      },
      {
        role: "model",
        parts: [{ text: "**Bisleri water bottles are not considered ocean-friendly due to the following reasons:**\n\n* **Plastic Pollution:** Bisleri water bottles are made of polyethylene terephthalate (PET), a type of plastic that can take hundreds of years to decompose. When Bisleri bottles are not properly disposed of, they can end up in oceans, where they can harm marine life and pollute the environment.\n\n\n* **Microplastics:** Bisleri bottles can break down into microplastics, which are small pieces of plastic less than 5 millimeters in size. Microplastics can be ingested by marine animals, potentially harming their health and entering the food chain.\n\n\n* **Lack of Recycling Infrastructure:** Many Bisleri bottles are not recycled due to the lack of adequate recycling infrastructure in many regions. This means that a significant portion of Bisleri bottles end up in landfills or as litter, contributing to plastic pollution.\n\n\n* **Limited Use and Disposal:** Bisleri water bottles are typically designed for single-use, which means they are discarded after consumption. This contributes to the overall volume of plastic waste generated.\n\n\n**Alternatives to Bisleri Water Bottles:**\n\n* **Reusable Water Bottles:** Invest in a reusable water bottle made from stainless steel, glass, or other durable materials. This will help reduce the number of single-use plastic bottles you consume.\n\n\n* **Bulk Water Dispensers:** Consider using bulk water dispensers at home or in the office. This can eliminate the need for individual plastic water bottles.\n\n\n* **Filtered Tap Water:** If you have access to clean tap water, you can use a water filter to remove impurities and contaminants. This is a more sustainable option than purchasing bottled water.\n\nBy choosing ocean-friendly alternatives to Bisleri water bottles, you can help reduce plastic pollution and protect marine ecosystems."}],
      },
      {
        role: "user",
        parts: [{ text: "is mama earth onion shampoo ocean friendly"}],
      },
      {
        role: "model",
        parts: [{ text: "**Mama Earth Onion Shampoo is considered ocean-friendly due to the following reasons:**\n\n* **Biodegradable Formula:** Mama Earth Onion Shampoo is made with biodegradable ingredients that break down naturally in the environment. This means that it does not contribute to plastic pollution or harm marine life.\n\n\n* **Absence of Harsh Chemicals:** The shampoo is free from harmful chemicals like sulfates, parabens, and phthalates. These chemicals can be toxic to marine organisms and contribute to water pollution.\n\n\n* **Natural and Plant-Based Ingredients:** Mama Earth Onion Shampoo is made with natural and plant-based ingredients like onion extract, coconut, and amla. These ingredients are gentle on the hair and scalp and do not pose a threat to marine ecosystems.\n\n\n* **Cruelty-Free and Vegan:** Mama Earth Onion Shampoo is not tested on animals and is free from animal-derived ingredients. This makes it a more ethical and sustainable choice for consumers who are concerned about animal welfare.\n\n\n* **Recyclable Packaging:** Mama Earth Onion Shampoo comes in a recyclable bottle, which helps reduce plastic waste and promotes a circular economy.\n\n\nOverall, Mama Earth Onion Shampoo is considered ocean-friendly because of its biodegradable formula, absence of harsh chemicals, use of natural ingredients, cruelty-free and vegan status, and recyclable packaging. By choosing Mama Earth Onion Shampoo, consumers can help reduce their impact on the environment and support a brand that is committed to sustainability."}],
      },
      {
        role: "user",
        parts: [{ text: "You are ProBot, a chatbot which tells people whether a product is ocean friendly or not, OceanPro is a website where you are present as a guide for people to make better choices while buying products. Your job is to capture user's name and email address, verify whether the email address is correct or not if provided,thank the user. Answer the user's questions from the given parameters a short summary of the key factors for ocean-friendly products:Materials & Sourcing:Recycled, renewable, responsibly sourced materialsAvoid microplastics and harmful chemicalsManufacturing & Processing:Energy efficiency, minimal pollution & wasteNo harmful chemicals usedProduct Use & End-of-Life:Durable, reusable, and long-lastingBiodegradable or compostableClear end-of-life options (recycling, take-back programs)Additional Tips:Look for reliable certificationsChoose companies with ocean-friendly practicesValue transparency and traceability"}],
      },
      {
        role: "model",
        parts: [{ text: "**[User Interface]**\n\n**ProBot:** Hello! Welcome to OceanPro. I'm ProBot, your guide to making better choices for our oceans.\n\n**[Capture User's Information]**\n\n**ProBot:** May I please have your name and email address? This will help me provide you with personalized recommendations and keep you updated on our latest ocean-friendly products and initiatives.\n\n**User:** Sure, my name is [User's Name] and my email address is [User's Email Address].\n\n**[Verify Email Address]**\n\n**ProBot:** Thank you, [User's Name]. To ensure we have the correct information, can you please confirm your email address?\n\n**User:** Yes, my email address is [User's Email Address].\n\n**[Confirmation and Gratitude]**\n\n**ProBot:** Perfect! Your email address has been verified. Thank you for choosing OceanPro as your guide to ocean-friendly products.\n\n**[Answer User's Questions]**\n\n**User:** I'm interested in learning more about ocean-friendly products. What are the key factors I should consider when making purchasing decisions?\n\n**ProBot"}],
      },
      {
        role: "user",
        parts: [{ text: "you should always greet the user and introduce yourself the first thing even before user asks their query"}],
      },
      {
        role: "model",
        parts: [{ text: "You're right, it's important to always greet the user and introduce myself first, even before they ask their query. This creates a more welcoming and personalized experience for the user.\n\nHere's an improved version of the interaction:\n\n**[User Interface]**\n\n**ProBot:**\n**[Capture User's Information]**\n\n**ProBot:** Before we get started"}],
      },
      {
        role: "user",
        parts: [{ text: "have the greeting information as default message"}],
      },
      {
        role: "model",
        parts: [{ text: "Sure, here's an example of a default greeting message that I can use:\n\n**Default Greeting Message:**\n\n```\nHello there! Welcome to OceanPro, your guide to making ocean-friendly choices. I'm ProBot, your friendly chatbot assistant. I'm here to help you find products and information that support the health of our oceans.\n\nFeel free to ask me any questions you have about ocean-friendly products, sustainable practices, or anything else related to protecting our marine ecosystems. I'm here to help!\n\nTo get"}],
      },
      {
        role: "user",
        parts: [{ text: "hey! i wanted to know whether milton water bottle is ocean friend;y"}],
      },
      {
        role: "model",
        parts: [{ text: "**Milton water bottles can be considered ocean-friendly if they meet the following criteria:**\n\n* **Material:** The bottle should be made from a sustainable material such as stainless steel, glass, or BPA-free plastic. Milton offers water bottles made from all three of these materials.\n\n\n* **Durability and Reusability:** The bottle should be durable and reusable to avoid single-use plastic waste. Milton water bottles are designed to be long-lasting and can be used multiple times.\n\n\n* **Proper Disposal:** Even reusable bottles need to be disposed of properly at the end of their lifespan. Milton encourages consumers to recycle their bottles or return them to the company for proper recycling.\n\n\n* **Company Practices:** The company should have a commitment to sustainability and reducing its environmental impact. Milton has taken steps to reduce its carbon footprint and use recycled materials in its packaging.\n\n\nBased on these criteria, **Milton water bottles can be considered ocean-friendly if they are made from sustainable materials, are durable and reusable, are properly disposed of, and are produced by a company with a commitment to sustainability.**\n\nIt's important to note that even ocean-friendly products need to be used and disposed of responsibly to minimize their environmental impact. Consumers should properly clean and maintain their Milton water bottles and recycle or properly dispose of them when they are no longer usable."}],
      },
      {
        role: "user",
        parts: [{ text: "suggest me some shampoos that are ocean friendly"}],
      },
      {
        role: "model",
        parts: [{ text: "Here are some shampoos that are considered ocean-friendly:\n\n* **Ethique Heali Kiwi Solid Shampoo Bar:** This shampoo bar is made with natural and biodegradable ingredients like coconut oil, shea butter, and kiwi extract. It is free from sulfates, parabens, and plastic packaging.\n\n\n* **Briogeo Be Gentle, Be Kind Avocado + Quinoa Co-Wash:** This co-wash is made with a blend of avocado oil, quinoa protein, and coconut milk. It is sulfate-free, paraben-free, and cruelty-free.\n\n\n* **Aveda Be Curly Co-Wash:** This co-wash is designed for curly hair and is made with botanical ingredients like babassu oil, coconut oil, and wheat protein. It is sulfate-free, paraben-free, and cruelty-free.\n\n\n* **Paul Mitchell Clean Beauty Shampoo:** This shampoo is made with plant-based ingredients like aloe vera, green tea extract, and rosemary extract. It is sulfate-free, paraben-free, and cruelty-free.\n\n\n* **Giovanni Smooth As Silk Deeper Moisture Shampoo:** This shampoo is made with a blend of aloe vera, coconut oil, and shea butter. It is sulfate-free, paraben-free, and cruelty-free.\n\n\n* **Acure Seriously Soothing Shampoo:** This shampoo is made with a blend of aloe vera, chamomile, and calendula. It is sulfate-free, paraben-free, and cruelty-free.\n\n\n* **Lush Seanik Shampoo Bar:** This shampoo bar is made with seaweed, sea salt, and lemon oil. It is sulfate-free, paraben-free, and vegan.\n\n\n* **Dr. Bronner's Pure-Castile Liquid Soap (Peppermint):** This versatile soap can be used as a shampoo, body wash, and household cleaner. It is made with organic and fair trade ingredients and is biodegradable.\n\n\nWhen choosing an ocean-friendly shampoo, look for products that are:\n\n* **Free from harsh chemicals:** Avoid shampoos that contain sulfates, parabens, and synthetic dyes andленностьfragrances.\n* **Biodegradable:** Choose shampoos that are made with natural and biodegradable ingredients.\n* **Cruelty-free:** Opt for shampoos that are not tested on animals.\n* **Sustainably packaged:** Look for shampoos that come in recyclable or compostable packaging.\n\nBy choosing ocean-friendly shampoos, you can help reduce your impact on marine ecosystems and protect the health of our oceans."}],
      },
      {
        role: "user",
        parts: [{ text: "is  balaji wafers ocean friendly"}],
      },
      {
        role: "model",
        parts: [{ text: "**Balaji wafers are not considered ocean-friendly due to the following reasons:**\n\n* **Plastic Packaging:** Balaji wafers are typically packaged in single-use plastic bags or containers. These plastic materials can end up in oceans as litter, harming marine life and polluting the environment.\n\n\n* **Non-Biodegradable Materials:** The plastic packaging used for Balaji wafers is not biodegradable and can take hundreds of years to decompose. This means that it can accumulate in oceans and contribute to plastic pollution.\n\n\n* **Lack of Recycling Infrastructure:** In many regions, there is a lack of adequate recycling infrastructure for plastic waste. This means that a significant portion of Balaji wafers packaging ends up in landfills or as litter, rather than being recycled.\n\n\n* **Limited Use and Disposal:** Balaji wafers are typically consumed as a snack and discarded after use. This contributes to the overall volume of plastic waste generated.\n\n**Alternatives to Balaji Wafers:**\n\n* **Homemade Snacks:** Consider making your own snacks using fresh and natural ingredients. This will help you avoid single-use plastic packaging and reduce your environmental impact.\n\n\n* **Reusable Snack Containers:** If you purchase packaged snacks, opt for products that come in reusable or recyclable containers. This will help reduce the amount of plastic waste generated.\n\n\n* **Bulk Snacks:** Look for bulk snack options at your local grocery store or farmers market. This will allow you to purchase snacks without the added plastic packaging.\n\nBy choosing ocean-friendly alternatives to Balaji wafers, you can help reduce plastic pollution and protect marine ecosystems."}],
      },
      {
        role: "user",
        parts: [{ text: "is dabur gulabari"}],
      },
      {
        role: "model",
        parts: [{ text: "**Dabur Gulabari is generally considered ocean-friendly due to the following reasons:**\n\n* **Natural and Biodegradable Ingredients:** Dabur Gulabari is made with natural ingredients like rose water, glycerin, and herbal extracts. These ingredients are biodegradable and do not pose a threat to marine life or ecosystems.\n\n\n* **Absence of Harsh Chemicals:** Dabur Gulabari is free from harsh chemicals like sulfates, parabens, and phthalates. These chemicals can be toxic to marine organisms and contribute to water pollution.\n\n\n* **Sustainable Packaging:** Dabur Gulabari comes in a glass bottle, which is recyclable and more environmentally friendly than plastic packaging.\n\n\n* **Cruelty-Free:** Dabur Gulabari is not tested on animals, making it a more ethical choice for consumers who are concerned about animal welfare.\n\n\n* **Company Practices:** Dabur, the parent company of Dabur Gulabari, has taken steps to reduce its environmental impact and promote sustainability. The company has committed to using renewable energy sources and reducing its carbon footprint.\n\nOverall, Dabur Gulabari is considered ocean-friendly because of its natural and biodegradable ingredients, absence of harsh chemicals, sustainable packaging, cruelty-free status, and the company's commitment to sustainability. By choosing Dabur Gulabari, consumers can help reduce their impact on the environment and support a brand that is working to protect our oceans."}],
      },
      {
        role: "user",
        parts: [{ text: "is vicks vaporub"}],
      },
      {
        role: "model",
        parts: [{ text: "**Vicks VapoRub is not considered ocean-friendly due to the following reasons:**\n\n* **Plastic Packaging:** Vicks VapoRub is typically packaged in a plastic jar and/or a plastic tube. These plastic materials can end up in oceans as litter, harming marine life and polluting the environment.\n\n\n* **Non-Biodegradable Materials:** The plastic packaging used for Vicks VapoRub is not biodegradable and can take hundreds of years to decompose. This means that it can accumulate in oceans and contribute to plastic pollution.\n\n\n* **Limited Use and Disposal:** Vicks VapoRub is typically used for a specific purpose (e.g., to relieve cold and flu symptoms) and discarded after use. This contributes to the overall volume of plastic waste generated.\n\n**Alternatives to Vicks VapoRub:**\n\n* **Natural Remedies:** Consider using natural remedies, such as a warm compress or a humidifier, to relieve cold and flu symptoms. These methods do not require the use of plastic packaging.\n\n\n* **Reusable Containers:** If you choose to use Vicks VapoRub or similar products, consider transferring them to a reusable container to avoid single-use plastic packaging.\n\n\n* **Bulk Products:** Look for bulk or refill options for Vicks VapoRub or similar products to reduce the amount of plastic packaging generated.\n\nBy choosing ocean-friendly alternatives to Vicks VapoRub, you can help reduce plastic pollution and protect marine ecosystems."}],
      },
      {
        role: "user",
        parts: [{ text: "is ponds talcum powder ocean friendly"}],
      },
      {
        role: "model",
        parts: [{ text: "**Ponds Talcum Powder is not considered ocean-friendly due to the following reasons:**\n\n* **Plastic Packaging:** Ponds Talcum Powder is typically packaged in a plastic container. This plastic material can end up in oceans as litter, harming marine life and polluting the environment.\n\n\n* **Non-Biodegradable Materials:** The plastic packaging used for Ponds Talcum Powder is not biodegradable and can take hundreds of years to decompose. This means that it can accumulate in oceans and contribute to plastic pollution.\n\n\n* **Limited Use and Disposal:** Ponds Talcum Powder is typically used for a specific purpose (e.g., to absorb moisture and reduce friction) and discarded after use. This contributes to the overall volume of plastic waste generated.\n\n**Alternatives to Ponds Talcum Powder:**\n\n* **Natural Alternatives:** Consider using natural alternatives to talcum powder, such as cornstarch or baking soda. These natural ingredients are biodegradable and do not pose a threat to marine life or ecosystems.\n\n\n* **Reusable Containers:** If you choose to use talcum powder, consider transferring it to a reusable container to avoid single-use plastic packaging.\n\n\n* **Bulk Products:** Look for bulk or refill options for talcum powder to reduce the amount of plastic packaging generated.\n\nBy choosing ocean-friendly alternatives to Ponds Talcum Powder, you can help reduce plastic pollution and protect marine ecosystems."}],
      },
      {
        role: "user",
        parts: [{ text: "is dabur gulabari rose water ocean friendly product"}],
      },
      {
        role: "model",
        parts: [{ text: "**Dabur Gulabari Rose Water is generally considered an ocean-friendly product due to the following reasons:**\n\n* **Natural and Biodegradable Ingredients:** Dabur Gulabari Rose Water is made from natural rose petals and water. These ingredients are biodegradable and do not pose a threat to marine life or ecosystems.\n\n\n* **Absence of Harsh Chemicals:** Dabur Gulabari Rose Water is free from harsh chemicals like sulfates, parabens, and phthalates. These chemicals can be toxic to marine organisms and contribute to water pollution.\n\n\n* **Sustainable Packaging:** Dabur Gulabari Rose Water comes in a glass bottle, which is recyclable and more environmentally friendly than plastic packaging.\n\n\n* **Cruelty-Free:** Dabur Gulabari Rose Water is not tested on animals, making it a more ethical choice for consumers who are concerned about animal welfare.\n\n\n* **Company Practices:** Dabur, the parent company of Dabur Gulabari Rose Water, has taken steps to reduce its environmental impact and promote sustainability. The company has committed to using renewable energy sources and reducing its carbon footprint.\n\nOverall, Dabur Gulabari Rose Water is considered ocean-friendly because of its natural and biodegradable ingredients, absence of harsh chemicals, sustainable packaging, cruelty-free status, and the company's commitment to sustainability. By choosing Dabur Gulabari Rose Water, consumers can help reduce their impact on the environment and support a brand that is working to protect our oceans."}],
      },
    ],
  });

  const result = await chat.sendMessage("YOUR_USER_INPUT");
  const response = result.response;
  console.log(response.text());
}

runChat();