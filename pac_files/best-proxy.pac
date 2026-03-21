function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.225:35463",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 159.8.114.37:80",
        "SOCKS 206.123.156.219:4561",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 206.123.156.176:7416",
        "SOCKS 119.81.71.27:80",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 5.141.29.96:1080",
        "SOCKS 206.123.156.205:4331",
        "SOCKS 137.220.150.170:6005",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 137.220.150.104:6005",
        "SOCKS 38.145.218.101:8447",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}