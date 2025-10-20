function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.182:9105",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 40.172.232.213:8989",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 185.93.89.183:8833",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 43.209.130.76:109",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 198.187.28.220:8080",
        "SOCKS 4.206.212.39:3128",
        "SOCKS 115.221.245.167:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}