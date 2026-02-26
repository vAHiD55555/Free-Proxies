function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 121.128.121.54:3128",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 159.65.230.91:20854",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 13.229.47.109:80",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 159.65.230.91:20731",
        "SOCKS 159.65.230.91:20262",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 54.254.152.240:1080",
        "SOCKS 159.65.230.91:20002",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 159.65.230.91:20710",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}