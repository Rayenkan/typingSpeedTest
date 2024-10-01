"didnt find a text generator api (:  "
export function generateRandomText(length: number): string {
    const words = [
        // Numbers
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand",

        // Basic Verbs & Words
        "do", "can", "will", "is", "are", "was", "were", "be", "am", "have", "has", "had", "should", "could", "would", "trust", "know", "think", "feel", "love", "hate", "like", "need", "want", "see", "look", "hear", "say", "talk", "speak", "listen", "go", "come", "bring", "give", "take", "make", "find", "lose", "play", "work", "run", "walk", "dance", "sing", "read", "write", "call", "ask", "answer", "wait", "hope", "try", "start", "stop",

        // Emotions & Feelings
        "happy", "sad", "angry", "tired", "excited", "bored", "scared", "nervous", "calm", "confused", "surprised", "proud", "grateful", "lonely", "relaxed", "worried", "jealous", "hopeful", "anxious",

        // Everyday Actions
        "eat", "drink", "sleep", "wake", "cook", "clean", "wash", "watch", "play", "learn", "teach", "drive", "ride", "fly", "travel", "shop", "buy", "sell", "save", "spend", "plan", "pay", "help", "join", "fix", "move", "build", "create", "draw", "paint", "build", "dance", "sing", "jump", "kick", "throw", "catch",

        // Objects
        "phone", "book", "pen", "paper", "bag", "shoe", "shirt", "hat", "desk", "chair", "car", "bike", "train", "bus", "table", "bed", "sofa", "lamp", "window", "door", "key", "cup", "plate", "fork", "spoon", "knife", "clock", "watch", "mirror", "computer", "keyboard", "mouse", "headphones", "TV", "remote", "bottle", "umbrella", "wallet", "purse", "camera",

        // Places
        "home", "school", "office", "work", "store", "shop", "mall", "park", "library", "gym", "restaurant", "hotel", "hospital", "beach", "forest", "mountain", "city", "village", "farm", "airport", "station", "cafe", "club", "stadium", "cinema", "theater",

        // Time & Days
        "morning", "afternoon", "evening", "night", "today", "yesterday", "tomorrow", "now", "later", "soon", "never", "always", "sometimes", "often", "rarely", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "week", "month", "year", "hour", "minute", "second",

        // Basic Concepts
        "yes", "no", "maybe", "sure", "okay", "please", "thanks", "sorry", "welcome", "hello", "goodbye", "hi", "bye", "wow", "cool", "awesome", "great", "fun", "interesting", "important", "easy", "hard", "fast", "slow", "small", "big", "hot", "cold", "good", "bad", "right", "wrong", "light", "dark", "new", "old",

        // Relationships
        "friend", "family", "mother", "father", "brother", "sister", "uncle", "aunt", "cousin", "son", "daughter", "partner", "husband", "wife", "neighbor", "boss", "colleague", "teacher", "student", "stranger", "guest", "host",

        // Numbers
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
        "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
        "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "100", "200", "300", "400", "500", "1000",

        // Symbols
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "<", ">", "/", "?", "|",
        "~", "`", ".", ",", ":", ";", "'", "\"",
        // Fruits
        "apple", "banana", "orange", "pear", "grape", "mango", "pineapple", "peach", "plum", "kiwi", "strawberry", "blueberry", "raspberry", "blackberry", "watermelon", "melon", "lime", "lemon", "papaya", "guava", "coconut", "apricot", "fig", "grapefruit", "passionfruit", "pomegranate", "date", "nectarine", "cherry", "avocado",

        // Animals
        "dog", "cat", "bird", "fish", "tiger", "lion", "bear", "elephant", "giraffe", "zebra", "shark", "dolphin", "whale", "fox", "wolf", "rabbit", "deer", "monkey", "kangaroo", "panda", "koala", "camel", "hippo", "rhino", "leopard", "cheetah", "jaguar", "penguin", "otter", "squirrel", "hedgehog", "owl", "hawk", "eagle", "falcon", "crow", "raven", "sparrow", "pigeon", "parrot", "peacock", "ostrich",

        // Tech/Devices
        "computer", "phone", "keyboard", "monitor", "mouse", "laptop", "tablet", "camera", "microphone", "headphones", "smartwatch", "TV", "printer", "router", "modem", "projector", "gamepad", "joystick", "controller", "drone", "speaker", "charger", "battery", "USB", "hard drive", "SSD", "powerbank", "VR headset", "earbuds", "amplifier", "webcam",

        // Vehicles
        "car", "bus", "train", "plane", "bicycle", "motorcycle", "truck", "scooter", "boat", "ship", "submarine", "yacht", "helicopter", "jet", "sailboat", "spaceship", "rocket", "hoverboard", "skateboard", "tram", "taxi", "rickshaw", "hovercraft",

        // Nature
        "sun", "moon", "star", "cloud", "sky", "rain", "snow", "wind", "mountain", "river", "ocean", "lake", "forest", "tree", "flower", "plant", "grass", "leaf", "branch", "bush", "hill", "valley", "volcano", "island", "beach", "desert", "canyon", "cliff", "sand", "wave", "waterfall", "lightning", "thunder", "storm", "hurricane", "earthquake", "tornado", "fog", "mist", "dew", "rainbow",

        // Everyday Objects
        "book", "pen", "paper", "pencil", "notebook", "desk", "chair", "lamp", "clock", "watch", "mirror", "cup", "mug", "bottle", "plate", "spoon", "fork", "knife", "bowl", "pan", "pot", "oven", "fridge", "microwave", "stove", "freezer", "vacuum", "fan", "air conditioner", "heater", "toaster", "blender", "iron", "sewing machine", "broom", "mop", "bucket", "soap", "towel", "blanket", "pillow", "mattress", "curtain", "rug", "carpet",

        // Places
        "house", "apartment", "garden", "kitchen", "bedroom", "bathroom", "garage", "office", "store", "shop", "restaurant", "hotel", "museum", "library", "park", "playground", "stadium", "theater", "cinema", "school", "university", "hospital", "church", "temple", "mosque", "castle", "palace", "fortress", "factory", "warehouse", "gym", "studio", "club", "bar", "cafe",

        // Jobs
        "doctor", "nurse", "teacher", "student", "engineer", "mechanic", "pilot", "driver", "chef", "artist", "musician", "singer", "actor", "director", "photographer", "writer", "author", "journalist", "scientist", "researcher", "librarian", "lawyer", "judge", "police", "firefighter", "soldier", "architect", "designer", "programmer", "developer", "manager", "accountant", "clerk", "secretary", "barber", "hairdresser", "salesperson", "cashier", "waiter", "cleaner", "guard", "farmer",

        // Emotions
        "happy", "sad", "angry", "excited", "bored", "nervous", "scared", "shocked", "tired", "surprised", "confused", "curious", "frustrated", "relaxed", "calm", "proud", "jealous", "guilty", "ashamed", "grateful", "anxious", "relieved", "hopeful", "worried", "lonely", "disappointed", "embarrassed", "amused", "cheerful", "content", "fearful", "loving", "resentful", "sympathetic", "thoughtful", "vengeful", "optimistic", "pessimistic", "joyful", "melancholic",

        // Actions
        "run", "walk", "jump", "sit", "stand", "sleep", "eat", "drink", "read", "write", "draw", "paint", "sing", "dance", "swim", "climb", "drive", "ride", "fly", "watch", "listen", "talk", "shout", "whisper", "laugh", "cry", "smile", "frown", "yawn", "sneeze", "cough", "hug", "kiss", "kick", "punch", "clap", "wave", "nod", "shake", "point", "throw", "catch", "push", "pull", "lift", "drop", "hit",

        // Food & Drinks
        "bread", "rice", "pasta", "noodles", "burger", "pizza", "sandwich", "salad", "soup", "steak", "chicken", "beef", "pork", "fish", "shrimp", "lobster", "crab", "egg", "cheese", "butter", "milk", "yogurt", "cream", "ice cream", "cake", "cookie", "chocolate", "candy", "sugar", "honey", "salt", "pepper", "spice", "oil", "vinegar", "sauce", "ketchup", "mustard", "mayonnaise", "tea", "coffee", "juice", "soda", "water", "wine", "beer", "whiskey", "vodka", "cocktail",

        // Sports
        "football", "soccer", "basketball", "baseball", "tennis", "golf", "swimming", "running", "cycling", "skiing", "snowboarding", "skating", "hockey", "volleyball", "rugby", "cricket", "boxing", "wrestling", "karate", "judo", "taekwondo", "archery", "fencing", "gymnastics", "surfing", "skateboarding", "badminton", "table tennis", "bowling", "fishing", "hiking", "camping", "rock climbing", "rowing", "kayaking", "sailing", "horseback riding", "yoga", "pilates", "dancing", "weightlifting", "bodybuilding", "wrestling", "jogging", "parkour", "frisbee",

        // Miscellaneous
        "dream", "memory", "idea", "thought", "hope", "fear", "plan", "goal", "question", "answer", "solution", "problem", "puzzle", "riddle", "joke", "truth", "lie", "myth", "fact", "rumor", "story", "poem", "song", "film", "book", "game", "hobby", "interest", "habit", "routine", "tradition", "festival", "holiday", "celebration", "party", "gift", "present", "reward", "punishment", "test", "exam", "lesson", "course", "class", "study", "research", "experiment", "invention", "discovery"
    ];

    let randomText = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomText += words[randomIndex] + " ";
    }

    return randomText.trim();
}
