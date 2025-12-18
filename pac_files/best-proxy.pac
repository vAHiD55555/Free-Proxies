function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 8.222.234.245:1145",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 128.140.76.145:10773",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 67.201.35.145:4145",
        "SOCKS 45.179.129.98:60000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}