function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.7:15252",
        "SOCKS 58.19.55.4:15040",
        "SOCKS 103.70.114.80:8080",
        "SOCKS 58.19.55.4:15023",
        "SOCKS 58.19.55.7:15159",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 58.19.55.7:15375",
        "SOCKS 158.94.208.76:9050",
        "SOCKS 58.19.55.4:15082",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 125.24.156.113:7080",
        "SOCKS 58.19.55.7:15214",
        "SOCKS 93.177.116.84:1080",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 107.152.32.98:1710",
        "SOCKS 58.19.55.7:15171",
        "SOCKS 58.19.55.88:15003",
        "SOCKS 104.248.59.38:80",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 193.56.255.181:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}