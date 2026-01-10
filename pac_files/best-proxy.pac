function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:39452",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 154.12.41.175:12345",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 88.216.68.24:9064",
        "SOCKS 62.60.131.193:7431",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 47.86.42.224:1111",
        "SOCKS 67.43.236.18:10943",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 138.124.81.12:8888",
        "SOCKS 185.189.112.157:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}