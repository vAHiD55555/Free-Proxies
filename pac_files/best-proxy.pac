function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.7.252.165:3256",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 206.123.156.233:11846",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 154.64.235.206:58367",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 78.140.13.97:10801",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 117.1.48.242:20039",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 18.141.177.23:80",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 106.45.221.168:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}