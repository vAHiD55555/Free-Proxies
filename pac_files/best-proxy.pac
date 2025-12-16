function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.180.174:2026",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 107.174.242.87:8118",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 45.166.93.113:999",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 89.110.80.195:10149",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 202.40.184.54:64564",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 95.217.117.168:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 200.70.35.2:8080",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 128.140.76.145:11131",
        "SOCKS 67.43.236.19:29535",
        "SOCKS 128.140.76.145:29165",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}