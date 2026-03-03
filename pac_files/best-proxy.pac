function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 206.123.156.223:5978",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 156.254.114.47:58367",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 206.123.156.177:8922",
        "SOCKS 61.72.221.94:3128",
        "SOCKS 186.0.144.81:9797",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 78.85.154.228:1080",
        "SOCKS 212.34.135.86:5000",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 58.19.55.17:15191",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}