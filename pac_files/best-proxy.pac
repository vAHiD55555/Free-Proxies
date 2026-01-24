function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.185:4137",
        "SOCKS 62.60.131.183:4149",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 104.248.59.38:80",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 62.60.131.194:4708",
        "SOCKS 13.229.47.109:80",
        "SOCKS 62.60.131.178:4177",
        "SOCKS 36.255.98.161:4814",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 62.60.131.182:4298",
        "SOCKS 36.255.98.161:4625",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 36.255.98.180:4580",
        "SOCKS 36.255.98.160:6997",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 112.86.116.24:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}