function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.33.248.45:1080",
        "SOCKS 89.58.45.94:10038",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 89.58.45.94:42479",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 89.58.45.94:21353",
        "SOCKS 72.10.160.94:23005",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 155.94.163.202:1080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 89.58.45.94:32325",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 89.58.45.94:15067",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 89.58.45.94:37133",
        "SOCKS 51.158.98.211:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}