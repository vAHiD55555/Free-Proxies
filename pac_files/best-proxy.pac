function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.56.98:19190",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 213.5.17.84:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 47.237.70.144:1011",
        "SOCKS 152.53.171.242:51831",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 102.36.127.53:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 152.53.171.242:45801",
        "SOCKS 128.140.76.145:29623",
        "SOCKS 159.223.149.191:20202",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 152.53.171.242:57455",
        "SOCKS 152.53.171.242:50949",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 118.27.111.97:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}