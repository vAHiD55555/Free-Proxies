function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.203.35:28080",
        "SOCKS 123.54.197.17:23390",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 123.54.197.50:22374",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 123.54.197.21:22664",
        "SOCKS 123.54.197.24:20468",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 45.12.151.226:2828",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 190.242.157.215:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}