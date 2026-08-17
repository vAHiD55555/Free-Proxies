function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.25.158.95:1080",
        "SOCKS 167.71.102.253:3128",
        "SOCKS 46.173.26.104:1080",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 8.211.49.86:999",
        "SOCKS 103.161.104.105:1080",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 185.70.129.183:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 130.193.43.183:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 194.87.187.145:8118",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 140.245.53.190:1088",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 91.246.1.6:4433",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}