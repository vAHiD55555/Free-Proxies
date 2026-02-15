function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:10135",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 123.54.197.53:21345",
        "SOCKS 72.10.160.91:6683",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 123.54.197.21:20525",
        "SOCKS 185.189.51.72:12345",
        "SOCKS 104.248.59.38:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}