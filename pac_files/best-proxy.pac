function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.213.197.208:100",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 217.144.187.3:1080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 190.242.157.215:8080",
        "SOCKS 91.121.48.221:38711",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}