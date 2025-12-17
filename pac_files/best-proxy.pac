function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.83.142:1088",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 44.213.1.118:80",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 14.182.39.51:8080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 8.222.152.163:1024",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 68.71.245.206:4145",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 212.33.248.45:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}